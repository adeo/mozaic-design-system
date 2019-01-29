workflow "Verify commit" {
  resolves = ["GitHub Action for Docker"]
  on = "label"
}

action "GitHub Action for Docker" {
  uses = "actions/gcloud/auth@master"
  runs = "gcloud app deploy app.demo.yaml --project=design-system-adeo"
  secrets = ["GCLOUD_AUTH"]
}
