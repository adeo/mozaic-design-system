workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "Deployement url",
  ]
}

action "not master" {
  uses = "actions/bin/filter@ec328c7554cbb19d9277fc671cf01ec7c661cd9a"
  args = "not branch master"
}

action "Npm lerna" {
  uses = "nuxt/actions-yarn@master"
  needs = ["not master"]
  args = "lerna"
}

action "npm build" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Npm lerna"]
  args = "build"
}

action "npm test" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["npm build"]
  args = "run test"
}

action "GCP auth" {
  uses = "actions/gcloud/auth@df59b3263b6597df4053a74e4e4376c045d9087e"
  needs = ["npm test"]
  secrets = ["GCLOUD_AUTH"]
}

action "Deploy Demo" {
  uses = "actions/gcloud/cli@df59b3263b6597df4053a74e4e4376c045d9087e"
  args = "--quiet --verbosity=error app deploy app.demo.yaml --project=design-system-adeo --version=$(echo $GITHUB_REF | iconv -t ascii//TRANSLIT | sed -r 's/[^a-zA-Z0-9]+//g' | sed -r 's/refsheads//g' | sed -r 's/^-+\\\\|-+$//g' | tr A-Z a-z) --no-promote"
  needs = ["GCP auth"]
}

action "Deployement url" {
  uses = "swinton/httpie.action@8ab0a0e926d091e0444fcacd5eb679d2e2d4ab3d"
  needs = ["Deploy Demo"]
  args = ["POST", "https://535e8ft89a.execute-api.eu-west-3.amazonaws.com/dev/deployment", "ref=$GITHUB_REF env=staging"]
}

workflow "Release" {
  on = "release"
  resolves = ["Deployement tag url"]
}

action "Npm install release" {
  uses = "nuxt/actions-yarn@master"
  args = "run lerna"
}

action "npm build release" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Npm install release"]
  args = "run build"
}

action "GCP auth release" {
  uses = "actions/gcloud/auth@df59b3263b6597df4053a74e4e4376c045d9087e"
  needs = ["npm build release"]
  secrets = ["GCLOUD_AUTH"]
}

action "Deploy Tag" {
  uses = "actions/gcloud/cli@df59b3263b6597df4053a74e4e4376c045d9087e"
  args = "--quiet --verbosity=error app deploy app.yaml --project=design-system-adeo --version=$(echo $GITHUB_REF | iconv -t ascii//TRANSLIT | sed -r 's/[^a-zA-Z0-9]+//g' | sed -r 's/refstags//g' | sed -r 's/^-+\\\\|-+$//g' | tr A-Z a-z) --promote"
  needs = ["GCP auth release"]
}

action "Deployement tag url" {
  uses = "swinton/httpie.action@8ab0a0e926d091e0444fcacd5eb679d2e2d4ab3d"
  needs = ["Deploy Tag"]
  args = ["POST", "https://535e8ft89a.execute-api.eu-west-3.amazonaws.com/dev/deployment", "ref=$GITHUB_REF env=production"]
}
