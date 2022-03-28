# dcomms

Decentralized communications that work with or without the Internet 

## Prerequisites
* A pre-existing [docker swarm](https://docs.docker.com/engine/swarm/) already setup and configured is necessary for orchestration of this software service stack.
* A domain to use for production.
* A directory named `/var/www/dcomms` created on the hosts of all docker nodes for the website document root.
* A subdomain with the A record pointed to the IP address of a node for automatic issuance of a Let's Encrypt SSL certificate.
* A subdomain with the MX record pointed to the A record of a node for DeltaChat mail delivery.

## Introduction

`dcomms` is a bundle of decentralized communication software running as services in the form of a docker swarm stack.

It is used to rapidly deploy and orchestrate decentralized, federated, communications platforms such as [Matrix](https://matrix.org/) and [DeltaChat](https://delta.chat) across multiple hosts.

Let's Encrypt TLS certificates are automatically issued and managed by the Caddy container across all services.

## Getting Started

Please see the main [dcomms repo](https://github.com/censorship-no/dcomms) for code and instructions on how to deploy the services. This README instructs on how to deploy the website, https://start.chatv3.ru

The frontend website uses [Nuxt.js](https://nuxtjs.org/).

1. Clone the repo:
```
git clone git@github.com:censorship-no/dcomms-web.git
```

2. Navigate to the front-end folder:
```
cd front/
```

3. Install dependencies:
```
yarn install
```

4. For initial compilation use:
```
yarn dev
```
Apps open in standard port `http://localhost:3000`

5. For production, you need to generate static files:
```
yarn generate
```

## Development

- Static files are in the `/static/` directory
- If you want to add a service, use `/store/index.js`
- Translate interface in the `/lang/` directory

For a detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Contributing

We welcome contributions, feature requests and bug reports in the issue tracker.

## License

All content is licensed under the GNU Public License v.3.0.
