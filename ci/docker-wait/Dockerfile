FROM node:18

LABEL "com.github.actions.name"="Node and Gcloud"
LABEL "com.github.actions.description"="Launch exec in node"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="green"

FROM debian:bullseye
ARG CLOUD_SDK_VERSION=378.0.0
ENV CLOUD_SDK_VERSION=$CLOUD_SDK_VERSION
ENV PATH "$PATH:/opt/google-cloud-sdk/bin/"

RUN groupadd -r -g 1000 cloudsdk && \
    useradd -r -u 1000 -m -s /bin/bash -g cloudsdk cloudsdk
RUN apt-get -qqy update && apt-get -qqy upgrade && apt-get install -qqy \
        curl \
        python3-dev \
        python3-crcmod \
        apt-transport-https \
        lsb-release \
        openssh-client \
        git \
        make \
        gnupg && \
    export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)" && \
    echo "deb https://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" > /etc/apt/sources.list.d/google-cloud-sdk.list && \
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
    apt-get update && \
    apt-get install -y google-cloud-cli=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-app-engine-python=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-app-engine-python-extras=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-app-engine-java=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-app-engine-go=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-datastore-emulator=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-pubsub-emulator=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-bigtable-emulator=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-cbt=${CLOUD_SDK_VERSION}-0 \
        google-cloud-cli-local-extract=${CLOUD_SDK_VERSION}-0

RUN apt-get install -qqy \
        gcc \
        python3-pip
RUN git config --system credential.'https://source.developers.google.com'.helper gcloud.sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18
RUN mkdir -p /usr/local/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default
RUN . $NVM_DIR/nvm.sh

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]