#!/bin/sh

set -e

echo "$GCLOUD_AUTH" | base64 --decode > "$HOME"/gcloud.json
gcloud auth activate-service-account --key-file=$HOME/gcloud.json

export DEBIAN_FRONTEND=noninteractive
apt-get -yq install nodejs npm 

npm install -g yarn 

sh -c "yarn $*"
