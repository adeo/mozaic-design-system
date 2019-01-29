workflow "Verify commit" {
  on = "pull_request"
  resolves = ["GitHub Action for Docker"]
}

action "GitHub Action for Docker" {
  uses = "swinton/httpie.action@02571a073b9aaf33930a18e697278d589a8051c1"
}
