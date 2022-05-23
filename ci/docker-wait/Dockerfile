FROM node:16

LABEL "com.github.actions.name"="Node and Gcloud"
LABEL "com.github.actions.description"="Launch exec in node"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="green"

ARG CLOUD_SDK_VERSION=334.0.0
ENV CLOUD_SDK_VERSION=$CLOUD_SDK_VERSION
RUN apt-get -qqy update && DEBIAN_FRONTEND=noninteractive apt-get install -qqy \
    curl \
    gcc \
    python3 \
    python-setuptools \
    apt-transport-https \
    lsb-release \
    openssh-client \
    git \
    gnupg \
    python3-pip && \
    pip3 install -U crcmod && \
    export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)" && \
    echo "deb https://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" > /etc/apt/sources.list.d/google-cloud-sdk.list && \
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
    apt-get update && \
    apt-get install -y google-cloud-sdk=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-app-engine-python=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-app-engine-python-extras=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-app-engine-java=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-app-engine-go=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-datalab=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-datastore-emulator=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-pubsub-emulator=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-bigtable-emulator=${CLOUD_SDK_VERSION}-0 \
    google-cloud-sdk-cbt=${CLOUD_SDK_VERSION}-0

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]