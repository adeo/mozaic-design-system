workflow "Verify commit" {
  resolves = ["GitHub Action for Docker"]
  on = "label"
}

action "GitHub Action for Docker" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
  runs = "gcloud app deploy app.demo.yaml"
}
