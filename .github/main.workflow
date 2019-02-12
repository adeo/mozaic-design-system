workflow "Build and deploy on push" {
  resolves = ["Deploy Demo "]
  on = "label"
}

action "Npm install" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  args = "install"
}

action "npm build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Npm install"]
  args = "npm run build"
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
