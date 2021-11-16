ARG VARIANT=17-bullseye
FROM node:${VARIANT}

RUN apt-get update \
    && apt-get install -y sudo

RUN adduser node sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER node
