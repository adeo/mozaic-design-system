workflow "Build and deploy on push" {
  on = "label"
  resolves = ["Deploy Demo "]
}

action "Npm install" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  args = "install"
}

action "npm build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Npm install"]
  args = "run build"
}

action "GCP auth" {
  uses = "actions/gcloud/auth@df59b3263b6597df4053a74e4e4376c045d9087e"
  needs = ["npm build"]
  secrets = ["GCLOUD_AUTH"]
}

action "Deploy Demo " {
  uses = "actions/gcloud/cli@df59b3263b6597df4053a74e4e4376c045d9087e"
  args = "--quiet --verbosity=error app deploy app.demo.yaml --project=design-system-adeo --version=$(echo $GITHUB_REF | iconv -t ascii//TRANSLIT | sed -r 's/[^a-zA-Z0-9]+//g' | sed -r 's/refsheads//g' | sed -r 's/^-+\\\\|-+$//g' | tr A-Z a-z) --no-promote"
  needs = ["GCP auth"]
}
