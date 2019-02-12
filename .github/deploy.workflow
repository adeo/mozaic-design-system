workflow "Verify commit" {
  on = "label"
  resolves = ["GitHub Action for Google Cloud"]
}

action "GCP Authenticate" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  needs = ["GCP Authenticate"]
  args = "--quiet --verbosity=error app deploy app.demo.yaml --project=design-system-adeo"
}

workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Deploy Demo "]
}

action "Npm install" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  args = "install"
}

action "npm build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Npm install"]
  args = "build"
}

action "GCP auth" {
  uses = "actions/gcloud/auth@df59b3263b6597df4053a74e4e4376c045d9087e"
  needs = ["npm build"]
  secrets = ["GCLOUD_AUTH"]
}

action "Deploy Demo " {
  uses = "actions/gcloud/cli@df59b3263b6597df4053a74e4e4376c045d9087e"
  args = "--quiet --verbosity=error app deploy app.demo.yaml --project=design-system-adeo"
  needs = ["GCP auth"]
}
