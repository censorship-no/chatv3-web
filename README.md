# chatv3 RU

Децентрализованные коммуникации, работающие как с Интернетом, так и без него 

## Предварительные условия
* Предварительно существующий [docker swarm](https://docs.docker.com/engine/swarm/), уже установленный и настроенный, необходим для оркестрирования этого стека сервисов.
* Домен, используемый для продакшена.
* Каталог с именем `/var/www/chatv3`, созданный на хостах всех узлов docker для корня документа сайта.
* Поддомен с записью A, указывающей на IP-адрес узла для автоматического выпуска SSL-сертификата Let's Encrypt.
* Поддомен с MX-записью, указывающей на A-запись узла для доставки почты DeltaChat.

## Введение

`chatv3` - это набор децентрализованного коммуникационного программного обеспечения, работающего как сервисы в виде стека docker swarm.

Он используется для быстрого развертывания и оркестрации децентрализованных, федеративных коммуникационных платформ, таких как [Matrix](https://matrix.org/) и [DeltaChat](https://delta.chat) на нескольких хостах.

Сертификаты Let's Encrypt TLS автоматически выпускаются и управляются контейнером Caddy для всех служб.

## Начало работы

Код и инструкции по развертыванию сервисов смотрите в основном [chatv3 repo](https://github.com/censorship-no/chatv3-web/). В этом README приведены инструкции по развертыванию веб-сайта, https://start.chatv3.ru.

Фронтенд сайта использует [Nuxt.js](https://nuxtjs.org/).

1. Клонируйте репозиторий:
```
git clone git@github.com:censorship-no/chatv3-web.git
```

2. Перейдите в папку front-end:
```
cd front/
```

3. Установите зависимости:
```
yarn install
```

4. Для компиляции  в режиме разработчика используйте:
```
yarn dev
```
Приложение открывается на стандартном порту `http://localhost:3000`.

5. Для продакшена необходимо сгенерировать статические файлы:
```
yarn generate
```

## Разработка

- Статические файлы находятся в директории `/static/`.
- Если вы хотите добавить сервис, используйте `/store/index.js`.
- Интерфейс перевода в директории `/lang/`.

Для подробного объяснения того, как все работает, ознакомьтесь с [документацией](https://nuxtjs.org).

## Вклад

Мы приветствуем вклад, запросы функций и сообщения об ошибках в трекере проблем.

## Лицензия

Все содержимое лицензировано по GNU Public License v.3.0.

# chatv3 EN

Decentralized communications that work with or without the Internet 

## Prerequisites
* A pre-existing [docker swarm](https://docs.docker.com/engine/swarm/) already setup and configured is necessary for orchestration of this software service stack.
* A domain to use for production.
* A directory named `/var/www/chatv3` created on the hosts of all docker nodes for the website document root.
* A subdomain with the A record pointed to the IP address of a node for automatic issuance of a Let's Encrypt SSL certificate.
* A subdomain with the MX record pointed to the A record of a node for DeltaChat mail delivery.

## Introduction

`chatv3` is a bundle of decentralized communication software running as services in the form of a docker swarm stack.

It is used to rapidly deploy and orchestrate decentralized, federated, communications platforms such as [Matrix](https://matrix.org/) and [DeltaChat](https://delta.chat) across multiple hosts.

Let's Encrypt TLS certificates are automatically issued and managed by the Caddy container across all services.

## Getting Started

Please see the main [chatv3 repo](https://github.com/censorship-no/chatv3) for code and instructions on how to deploy the services. This README instructs on how to deploy the website, https://start.chatv3.ru

The frontend website uses [Nuxt.js](https://nuxtjs.org/).

1. Clone the repo:
```
git clone git@github.com:censorship-no/chatv3-web.git
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
