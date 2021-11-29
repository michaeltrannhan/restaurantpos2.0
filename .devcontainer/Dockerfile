ARG VARIANT=17.1-bullseye

FROM node:${VARIANT}

ARG USERNAME=node
ENV PORT=3001

RUN apt-get update \
    && apt-get install -y apt-utils sudo \
    && echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL >/etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME} \
    && apt-get autoremove -y \
    && apt-get clean -y

USER ${USERNAME}
