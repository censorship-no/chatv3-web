# chatv3 RU

Децентрализованные коммуникации, работающие как с интернетом, так и без него 

# Предварительные условия
* Уже существующий [docker swarm](https://docs.docker.com/engine/swarm/), уже установленный и настроенный, необходим для управления этим стеком сервисов.
* Домен, используемый для продакшена.
* Поддомен с записью A, указывающей на IP-адрес узла для автоматического выпуска SSL-сертификата Let's Encrypt.
* Поддомен с MX-записью, указывающей на A-запись узла для доставки почты DeltaChat.

# Введение

`chatv3` - это набор децентрализованного коммуникационного программного обеспечения, работающего в виде стека docker swarm.

Он используется для быстрого развертывания и управления децентрализованными, федеративными коммуникационными платформами, такими как [Matrix](https://matrix.org/) и [DeltaChat](https://delta.chat) на нескольких хостах.

## Контейнеры сервисов

В стеке chatv3 используются одноузловые, не реплицируемые контейнеры следующих сервисов, собранных последних версий образов, приведенных ниже:

* [Клиент CENO](https://hub.docker.com/r/equalitie/ceno-client) любезно предоставлен сайтом censorship.no
* [Synapse Docker](https://hub.docker.com/r/matrixdotorg/synapse/) любезно предоставлено matrix.org
* [Element](https://hub.docker.com/r/vectorim/element-web/) любезно предоставлено vector-im
* [Caddy](https://hub.docker.com/_/caddy) любезно предоставлено мэйнтейнерами докера Caddy
* [docker-mailadm](https://github.com/deltachat/docker-mailadm), включает dovecot и postfix, любезно предоставлено DeltaChat


## Порты

Клиент CENO: 28729/udp \
Caddy (веб-сервер): 443/tcp, 80/tcp, 8448/tcp \
DeltaChat (postfix/dovecot): 587/tcp 143/tcp

* Примечание: `chatv3` использует сетевое взаимодействие с хостом docker, поэтому мы рекомендуем запретить доступ ко всем другим ненужным портам на уровне хоста.

# Установка

Направьте следующие записи A на docker worker, который вы хотите использовать для развертывания:
```
matrix.server1.example.org -> IP рабочей ноды
chat.server1.example.org -> IP рабочей ноды
server1.example.org -> IP рабочей ноды
```

Укажите следующую запись MX на запись A:
```
server1.example.org -> server1.example.org
```

Клонируйте или скачайте этот репозиторий.  Проверьте `./docker-compose.yml` и внесите любые изменения, которые могут потребоваться для вашей продакшн среды.

## Метки
Используйте метки, чтобы указать, на каких нодах docker должны работать сервисы

### Укажите docker worker ноду для работы в качестве моста CENO

* Получите ID ноды docker worker.  От ноды менеджера swarm:
```
docker node ls
```
* Добавьте метку `node.labels.dwebstackrole` к этому узлу:
```
docker node update --label-add=dwebstackrole=bridge <nodeid>
```

### Укажите ноду docker worker для размещения всех остальных сервисов.

* Добавьте метку `node.labels.dwebstackdomain`, соответствующую поддомену, который вы хотите предоставить узлу:
```
docker node update --label-add=dwebstackdomain=server1.example.org <nodeid>
```

## Provision   

Предоставьте сервер chatv3 с именем `server1.example.org`.  На ноде менеджера введите:

```
DWEB_DOMAIN=server1.example.org ./provision.sh
```

* Примечание: Это инвазивное действие. Пожалуйста, будьте осторожны и не создавайте узел с одним и тем же ``DWEB_DOMAIN`` несколько раз, чтобы Synapse не перезаписал данные.


## Перезапуск

Чтобы переразвернуть или перезапустить все службы chatv3 на `server1.example.org`, из менеджера ноды введите:

```
DWEB_DOMAIN=server1.example.org ./redeploy.sh
```

# После установки

* Optionally configure a Matrix client to use `https://matrix.server1.example.org` as the homeserver.
* Скопируйте существующий сайт в `/var/www` на хосте docker или выделите все файлы из `./site` в то же место.
* Вы можете использовать `https://server1.example.org` для просмотра веб-сайта.
* Вы можете использовать `https://chat.server1.example.org` для просмотра сервиса Element.
* Настройте клиент Matrix на использование `https://matrix.server1.example.org` в качестве домашнего сервера.

## Именование образов

Вы можете пометить образы в `docker-compose.yml` для более последовательного развертывания в продакшн версии.

# Отладка

## Проверка логов

Для ознакомления с логами ноды сварма используйте:
```
docker service logs dwebstack-server1_example_org_bridge -ft
docker service logs dwebstack-server1_example_org_caddy -ft
docker service logs dwebstack-server1_example_org_dovecot -ft
docker service logs dwebstack-server1_example_org_element -ft
docker service logs dwebstack-server1_example_org_mailadm -ft
docker service logs dwebstack-server1_example_org_postfix -ft
docker service logs dwebstack-server1_example_org_synapse -ft
```

# Фронт-энд

Для фронт-энда проекта искользован [Nuxt.js](https://nuxtjs.org/)
Детальную информация об этом фреймворке вы можете найти в оффициальной [документации](https://nuxtjs.org/docs/).

Файлы фреймворка расположены в папке — `front`

Для внесения изменений в проект загрузите пакеты
```
yarn install
```

Для стара компиляции в режиме разработчика используйте команду
```
yarn dev
```
Проект откроется по адресу `http://localhost:3000`

Для компиляции проекта в продакшн версию используете
```
yarn generate
```
Она сгенерирует статический файлы в папку `site`
 
# chatv3 EN

Decentralized communications that work with or without the Internet 

# Prerequisites
* A pre-existing [docker swarm](https://docs.docker.com/engine/swarm/) already setup and configured is necessary for orchestration of this software service stack.
* A domain to use for production.
* A subdomain with the A record pointed to the IP address of a node for automatic issuance of a Let's Encrypt SSL certificate.
* A subdomain with the MX record pointed to the A record of a node for DeltaChat mail delivery.

# Introduction

`chatv3` is a bundle of decentralized communication software running as services in the form of a docker swarm stack.

It is used to rapidly deploy and orchestrate decentralized, federated, communications platforms such as [Matrix](https://matrix.org/) and [DeltaChat](https://delta.chat) across multiple hosts.

## Service containers

The chatv3 stack leverages single node, non-replicated containers of the following services built from the latest images below:

* [CENO client](https://hub.docker.com/r/equalitie/ceno-client) courtesy of censorship.no
* [Synapse Docker](https://hub.docker.com/r/matrixdotorg/synapse/) courtesy of matrix.org
* [Element](https://hub.docker.com/r/vectorim/element-web/) courtesy of vector-im
* [Caddy](https://hub.docker.com/_/caddy) courtesy of the Caddy Docker Maintainers
* [docker-mailadm](https://github.com/deltachat/docker-mailadm), includes dovecot and postfix, courtesy of DeltaChat

## Ports

CENO client: 28729/udp \
Caddy (webserver): 443/tcp, 80/tcp, 8448/tcp \
DeltaChat (postfix/dovecot): 587/tcp 143/tcp

* Note: `chatv3` leverages docker host networking and therefore we recommend denying access to all other unnecessary ports at the host level.

# Installation

Point the following A records to the docker worker you wish to use for deployment:
```
matrix.server1.example.org -> IP of worker node
chat.server1.example.org -> IP of worker node
server1.example.org -> IP of worker node
```

Point the following MX record to the A record:
```
server1.example.org -> server1.example.org
```

Clone or download this repository.  Review `./docker-compose.yml` and make any changes that may be required for your production environment.

## Label
Use labels to specify which docker nodes services should run on

### Specify a docker worker node to act as a CENO bridge

* Obtain the node ID of a worker.  From the manager node of the swarm type:
```
docker node ls
```
* Add the `node.labels.dwebstackrole` label to that node:
```
docker node update --label-add=dwebstackrole=bridge <nodeid>
```

### Specify a docker worker node to host all other services

* Add the `node.labels.dwebstackdomain` label that matches the subdomain you wish to provision to the node:
```
docker node update --label-add=dwebstackdomain=server1.example.org <nodeid>
```

## Provision

Provision a chatv3 server as `server1.example.org`.  From the manager node type:

```
DWEB_DOMAIN=server1.example.org ./provision.sh
```

* Note: This is an invasive action. Kindly take caution not to provision a node with the same `DWEB_DOMAIN` multiple times to prevent Synapse from overwriting data.

## Redeploy

In the future, to redeploy or restart all chatv3 services on `server1.example.org`, from the manager node type:
```
DWEB_DOMAIN=server1.example.org ./redeploy.sh
```

# Post installation

* Copy a pre-existing website into `/var/www` of the docker host or checkout all files from `./site` into the same location.
* Optionally visit `https://server1.example.org` to view the website.
* Optionally visit `https://chat.server1.example.org` to view the Element service.
* Optionally configure a Matrix client to use `https://matrix.server1.example.org` as the homeserver.

## Tagging images

You may desire to tag the images within `docker-compose.yml` instead of relying upon the latest images for a more consistent deployment experience in production.

# Troubleshooting

## Log review

To review logs, from the manager node of the swarm, type:
```
docker service logs dwebstack-server1_example_org_bridge -ft
docker service logs dwebstack-server1_example_org_caddy -ft
docker service logs dwebstack-server1_example_org_dovecot -ft
docker service logs dwebstack-server1_example_org_element -ft
docker service logs dwebstack-server1_example_org_mailadm -ft
docker service logs dwebstack-server1_example_org_postfix -ft
docker service logs dwebstack-server1_example_org_synapse -ft
```

# Front-end
For front-end we are use [Nuxt.js](https://nuxtjs.org/)
Front-end folder — `front`

For install node dependence
```
yarn install
```

For start compilation use
```
yarn dev
```
Apps open in standart port `http://localhost:3000`

For production version need generate static files
```
yarn generate
```