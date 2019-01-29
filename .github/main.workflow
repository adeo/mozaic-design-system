workflow "Verify commit" {
  resolves = ["GitHub Action for Docker"]
  on = "label"
}

action "GCP Authenticate" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "GCP List Clusters" {
  needs = ["GCP Authenticate"]
  uses = "actions/gcloud/cli@master"
  args = "gcloud --quiet --verbosity=error app deploy app.demo.yaml --project=design-system-adeo"
}
