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
