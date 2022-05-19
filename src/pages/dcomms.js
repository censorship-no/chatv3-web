import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="dComms" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">
            Инструкция по установке{" "}
            <span className="highlight">сервера dcomms</span>
          </h1>
          <p>
            <b>
              dcomms (decentralized communications) это преднастроенный набор
              Docker-контейнеров децентрализованных федеративных приложений для
              коммуникаций, файлов конфигурации и скриптов управления для
              быстрого и простого разворачивания этих приложений на собственных
              серверах с помощью технологии Docker Swarm.
            </b>
            <br />
            <br />
            Децентрализованные приложения, входящие в набор dcomms, позволят
            вашим пользователям коммуницировать как при наличии подключения к
            Интернету, так и без него.
            <br />
            <br />В качестве примера предлагаем посмотреть на сервис{" "}
            <a href="https://moscow.chatv3.ru">Chat v.3</a> (названный так в
            честь Internet 3.0), построенный с помощью dcomms. Сервера Chat v.3
            расположены в нескольких городах России, на каждом сервере
            идентичный набор Docker-контейнеров с децентрализованными
            приложениями. Также есть отдельный управляющий сервер, через который
            с помощью технологии Docker Swarm осуществляется деплой системы.
            <br />
            <br />
            Используя репозиторий dcomms вы можете без проблем запустить сервис,
            аналогичный Chat v.3, внутри своей инфраструктуры и на собственном
            домене. С помощью Docker Swarm и инструментов dcomms вы сможете
            развернуть любое количество серверов и сабдоменов для вашей
            децентрализованной сети.
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>Введение</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-number">01</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Как это работает</p>
            <div className="card-item-text-desc">
              <p>
                Для разворачивания собственного сервиса для децентрализованных
                коммуникаций используется система оркестровки
                Docker-контейнерами Docker Swarm. Сервер Docker Swarm с ролью
                manager предназначен для репликации dcomms-контейнеров на
                серверы с ролью worker, как изображено на схеме ниже.
              </p>
              <StaticImage
                src="../images/dcomms-scheme.png"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
              <p>
                Набор скриптов управления делает всю работу автоматически: вам
                необходимо только склонировать репозиторий dcomms к себе на
                сервер, внести правки в файлы конфигурации и указать доменное
                имя.
              </p>
              <p>
                Для всех ресурсов будут автоматически выпущены Let's Encrypt TLS
                сертификаты, а доступ к ним будет предоставлен через веб-сервер
                Caddy. После репликации контейнеров ваш собственный сервис для
                децентрализованной коммуникации будет сразу готов к работе.
              </p>
              <p>
                Смотрите более подробно о том, какие приложения и компоненты
                включены в состав dcomms, а также пошаговую инструкцию по
                установке в следующих разделах.
              </p>
              <p>
                Вы можете использовать несколько серверов dcomms для того, чтобы
                работоспособность была сохранена даже в том случае, если
                какие-то из серверов окажутся недоступными. Федеративные
                децентрализованные сервисы устроены таким образом, что
                пользователи, зарегистрированные на одном сервере, могут
                соединяться и коммуницировать с пользователями,
                зарегистрированными на другом сервере.
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">02</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Что входит в состав dcomms</p>
            <div className="card-item-text-desc">
              <p>
                dcomms основывается на нереплицированных контейнерах,
                построенных на образах последних версий следующих приложений:
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <a href="https://hub.docker.com/r/equalitie/ceno-client">
                  CENO client
                </a>
                , поставляемый <a href="http://censorship.no/">censorship.no</a>
                .
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <a href="https://hub.docker.com/r/matrixdotorg/synapse/">
                  Synapse Docker
                </a>
                , поставляемый <a href="http://matrix.org/">matrix.org</a>,{" "}
                <a href="https://github.com/matrix-org/synapse/">
                  ссылка на github
                </a>
                .
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <a href="https://hub.docker.com/r/vectorim/element-web/">
                  Element
                </a>
                , поставляемый vector-im,{" "}
                <a href="https://github.com/vector-im/element-web">
                  ссылка на github
                </a>
                .
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <a href="https://hub.docker.com/_/caddy">Caddy</a>, поставляемый
                Caddy Docker Maintainers.
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <a href="https://github.com/deltachat/docker-mailadm">
                  docker-mailadm
                </a>
                , включающий в себя dovecot и postfix, поставляемый Delta Chat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="section-heading">
        <span>Разворачивание своего сервера dcomms</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-number">01</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Что для этого необходимо</p>
            <div className="card-item-text-desc">
              <p>
                <span className="highlight">></span> SSH root-доступ на 2
                сервера: один для Docker Swarm с ролью manager, второй для роли
                worker для непосредственного запуска приложений. Минимальные
                системные требования для роли manager: 1 vCPU, 1GB RAM; для роли
                worker: 2 vCPU, 4GB RAM; ОС Linux 64 bit с ядром 3.10 или выше.
                Существует возможность запуска и на одном сервере, это описано в
                разделе "Установка dcomms на одном сервере".
              </p>
              <p>
                <span className="highlight">></span> Доменное имя.
              </p>
              <p>
                <span className="highlight">></span> Доступ к управлению
                A-записями и MX-записями вашего доменного имени.
              </p>
              <p>
                <span className="highlight">></span> Публичный IP-адрес, если
                сервис публичный и доступ к нему должен быть возможен через
                Интернет.
              </p>
              <p>
                <span className="highlight">></span> Компетенции по базовому
                администрированию Linux и Docker.
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">02</div>
          <div className="card-item-text">
            <p className="card-item-text-name">
              Установка и настройка с помощью docker swarm
            </p>
            <p className="card-item-text-heading">Настройка доменов</p>
            <div className="card-item-text-desc">
              <p>Добавьте следующие A-записи для вашего доменного имени:</p>
              <p>
                <span className="highlight">></span>{" "}
                <code className="code-inline">server1.example.com</code>&rarr;
                <code className="code-inline">
                  IP-адрес сервера с ролью worker.
                </code>{" "}
                В качестве <b>server1</b> вы можете использовать любое имя,
                здесь это указано для примера, вместо <b>example.com</b> также
                имеется ввиду ваше доменное имя. В случае разворачивания сервиса
                на нескольких нодах в качестве <b>server1</b> можно
                использовать, например, название города или локации, в которой
                расположен соответствующий сервер.
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <code className="code-inline">matrix.server1.example.com</code>
                &rarr;
                <code className="code-inline">
                  IP-адрес сервера с ролью worker
                </code>{" "}
                (для сервера Matrix)
              </p>
              <p>
                <span className="highlight">></span>{" "}
                <code className="code-inline">chat.server1.example.com</code>
                &rarr;
                <code className="code-inline">
                  IP-адрес сервера с ролью worker
                </code>{" "}
                (для веб-клиента Element чата Matrix).
              </p>
              <p>Добавьте MX-запись для работы Delta Chat:</p>
              <p>
                <code className="code-inline">server1.example.com</code>&rarr;
                <code className="code-inline">server1.example.com</code>
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">03</div>
          <div className="card-item-text">
            <p className="card-item-text-name">
              Установка и разворачивание сервиса dcomms
            </p>
            <p className="card-item-text-heading">
              Подготовка сервера Docker Swarm manager
            </p>
            <div className="card-item-text-desc">
              <p>
                На сервере с ролью manager необходимо выполнить следующие шаги:
              </p>
              <p>
                <span className="highlight">1.</span> Установите Docker по
                официальному{" "}
                <a href="https://docs.docker.com/engine/install/">мануалу</a>.
              </p>
              <p>
                <span className="highlight">2.</span> Выберите и создайте
                директорию, в которой будут храниться файлы dcomms и
                конфигурации. Например, <b>/usr/share/dcomms</b>:
              </p>
              <p>
                <div className="code-block">
                  <code>mkdir -p /usr/share/dcomms</code>
                  <code>cd /usr/share/dcomms</code>
                </div>
              </p>
              <p>
                <span className="highlight">3.</span> Создайте пользователя и
                группу <b>eq</b>:
              </p>
              <p>
                <div className="code-block">
                  <code>adduser --system eq</code>
                  <code>addgroup --system eq</code>
                  <code>adduser eq eq</code>
                </div>
              </p>
              <p>
                <span className="highlight">4.</span> Склонируйте или скачайте
                репозиторий dcomms:
              </p>
              <p>
                <div className="code-block">
                  <code>
                    git clone https://github.com/censorship-no/dcomms/
                  </code>
                </div>
              </p>
              <p>
                <span className="highlight">5.</span> Выполните инициализацию
                режима Docker Swarm:
              </p>
              <p>
                <div className="code-block">
                  <code>docker swarm init</code>
                </div>
              </p>
              <p>
                После выполнения этой команды будет выведена строка подключения
                worker-нод к manager-ноде, например:
              </p>
              <p>
                <div className="code-block">
                  <code>
                    docker swarm join --token
                    SWMTKN-1-hbwgp1uosq68elf6fantcns4ivsmbusiepzftztetklggza0mn-0c8idote4jrf77s198hcd6uuf
                    X.X.X.X:2377
                  </code>
                </div>
              </p>
              <p>Сохраните эту команду, она понадобится позже.</p>
              <p className="card-item-text-heading">
                Подготовка сервера Docker Swarm worker
              </p>
              <p>
                На сервере с ролью worker необходимо выполнить следующие шаги:
              </p>
              <p>
                <span className="highlight">1.</span> Установите Docker по
                официальному{" "}
                <a href="https://docs.docker.com/engine/install/">мануалу</a>.
              </p>
              <p>
                <span className="highlight">2.</span> Подключите worker-ноду к
                manager-ноде, используя сохраненную ранее команду{" "}
                <b>docker swarm join</b>:
              </p>
              <p>
                <div className="code-block">
                  <code>
                    docker swarm join --token
                    SWMTKN-1-hbwgp1uosq68elf6fantcns4ivsmbusiepzftztetklggza0mn-0c8idote4jrf77s198hcd6uuf
                    X.X.X.X:2377
                  </code>
                </div>
              </p>
              <p>
                <span className="highlight">3.</span> Создайте директорию{" "}
                <b>/var/www/dcomm</b> (это необходимо для работы веб-сервера
                Caddy):
              </p>
              <p>
                <div className="code-block">
                  <code>mkdir -p /var/www/dcomms</code>
                </div>
              </p>
              <p>
                Шаги выше необходимо сделать для каждой worker-ноды в случае,
                если их несколько.
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">04</div>
          <div className="card-item-text">
            <p className="card-item-text-name">
              Конфигурация контейнеров и деплоя
            </p>
            <p className="card-item-text-heading">
              Указание предназначения нод для приложений с помощью Labels
            </p>
            <div className="card-item-text-desc">
              <p>
                С помощью Docker Labels и использования нескольких worker-нод
                можно указать, какие ноды для каких приложений использовать. Для
                варианта по умолчанию выполните такую настройку:
              </p>
              <p>
                <div className="code-block">
                  <code>docker node ls</code>
                </div>
              </p>
              <p>
                Команда выведет все подключенные ноды. Скопируйте идентификатор
                worker-ноды и выполните следующие шаги:
              </p>
              <p>
                <div className="code-block">
                  <code>
                    docker node update --label-add=dwebstackrole=bridge
                    &lt;nodeid&gt;
                  </code>
                  <code>
                    docker node update
                    --label-add=dwebstackdomain=server1.example.com
                    &lt;nodeid&gt;
                  </code>
                </div>
              </p>
              <p>
                Вместо <b>&lt;nodeid&gt;</b> подставьте скопированный
                идентификатор ноды, а вместо <b>server1.example.com</b> ваш
                сабдомен для сервиса dcomms.
              </p>
              <p>
                Шаги выше необходимо сделать для каждой worker-ноды в случае,
                если их несколько.
              </p>
            </div>
            <p className="card-item-text-heading">Конфигурация приложений</p>
            <div className="card-item-text-desc">
              <p>
                В директории <b>/conf/*</b> хранятся заранее подготовленные
                файлы конфигурации приложений. В файле{" "}
                <b>/conf/element/config.json</b> укажите вашу временную зону в
                параметре <b>defaultCountryCode</b>.
              </p>
              <p>
                Там же в <b>roomDirectory.servers</b> укажите все поддомены{" "}
                <b>chat.*</b> ваших worker-нод.
              </p>
              <p>
                Это необходимо для правильной работы веб-клиента Element для
                чата Matrix.
              </p>
              <p>
                Внесите другие изменения в конфигурации, если это необходимо.
              </p>
              <p>
                Также вы можете указать конкретные версии образов в файле{" "}
                <b>docker-compose.yml</b> вместо latest для большей стабильности
                сервиса в продакшне.
              </p>
            </div>
            <p className="card-item-text-heading">
              Деплой контейнеров и запуск сервиса
            </p>
            <div className="card-item-text-desc">
              <p>
                Подготовка окружения, загрузка и запуск контейнеров на
                worker-нодах (деплой) осуществляется на manager-ноде скриптом{" "}
                <b>provision.sh</b>. Для запуска деплоя выполните следующую
                команду для каждой worker-ноды соответственно:
              </p>
              <p>
                <div className="code-block">
                  <code>DWEB_DOMAIN=server1.example.com ./provision.sh</code>
                </div>
              </p>
              <p>
                Будьте внимательны: не деплойте ноды с одним и тем же
                DWEB_DOMAIN несколько раз, чтобы предотвратить перезапись данных
                Synapse.
              </p>
              <p>
                В случае успеха веб-версия Element для чата Matrix будет
                доступна по адресу:{" "}
                <a href="https://chat.server1.example.com">
                  chat.server1.example.com
                </a>
                . Адрес для подключения других клиентов Matrix:{" "}
                <a href="https://matrix.server1.example.com">
                  matrix.server1.example.com
                </a>
              </p>
            </div>
            <p className="card-item-text-heading">
              Повторный деплой или перезапуск
            </p>
            <div className="card-item-text-desc">
              <p>
                Для отката и повторного деплоя или перезапуска всех сервисов
                dcomms на определенном сабдомене используйте скрипт{" "}
                <b>redeploy.sh</b> с manager-ноды:
              </p>
              <p>
                <div className="code-block">
                  <code>DWEB_DOMAIN=server1.example.com ./redeploy.sh</code>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">05</div>
          <div className="card-item-text">
            <p className="card-item-text-name">
              Генерация QR-кода приглашения в Delta Chat
            </p>
            <p className="card-item-text-heading">Настройка доменов</p>
            <div className="card-item-text-desc">
              <p>
                Для подключения к серверу Delta Chat в клиентском приложении
                необходимо просканировать QR-код. Для генерации QR-кода,
                связанного с вашим только что установленным сервером выполните
                следующие шаги:
              </p>
              <p>
                <span className="highlight">1.</span> На сервере worker
                просмотрите список запущенных контейнеров:
              </p>
              <p>
                <div className="code-block">
                  <code>docker stats</code>
                </div>
              </p>
              <p>Скопируйте идентификатор контейнера mailadm.</p>
              <p>
                <span className="highlight">2.</span> Запустите оболочку внутри
                контейнера mailadm:
              </p>
              <p>
                <div className="code-block">
                  <code>docker exec -it &lt;container_id&gt; /bin/bash</code>
                </div>
              </p>
              <p>
                Указав вместо &lt;container_id&gt; скопированный идентификатор.
              </p>
              <p>
                <span className="highlight">3.</span> Узнайте уникальный токен
                данного сервера:
              </p>
              <p>
                <div className="code-block">
                  <code>cd /var/lib/mailadm</code>
                  <code>mailadm list-tokens</code>
                </div>
              </p>
              <p>Команда выведет токен, например:</p>
              <p>
                <div className="code-block">
                  <code>...</code>
                  <code>token = t1YWxCmX</code>
                  <code>...</code>
                </div>
              </p>
              <p>Скопируйте его.</p>
              <p>
                <span className="highlight">4.</span> Сгенерируйте QR-код,
                передав в команду этот токен:
              </p>
              <p>
                <div className="code-block">
                  <code>mailadm gen-qr t1YWxCmX</code>
                </div>
              </p>
              <p>
                <span className="highlight">5.</span> Скопируйте изображение с
                QR-кодом из контейнера на сервер:
              </p>
              <p>
                <div className="code-block">
                  <code>exit</code>
                  <code>
                    docker cp
                    &lt;container_id&gt;:/var/lib/mailadm/dcaccount-server1.example.com-t1YWxCmX
                    ./
                  </code>
                </div>
              </p>
              <p>
                Вместо <b>&lt;container_id&gt;</b> используйте ваш идентификатор
                контейнера mailadm, а также подставьте имя файла QR-кода
                согласно вашим данным.
              </p>
              <p>
                <span className="highlight">6.</span> Разместите этот файл на
                веб-сервере или где-либо ещё для возможности его раздачи
                пользователям, чтобы они могли подключиться к вашему серверу
                Delta Chat.
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">06</div>
          <div className="card-item-text">
            <p className="card-item-text-name">
              Разворачивание веб-сайта сервиса
            </p>
            <div className="card-item-text-desc">
              <p>
                Проект dcomms также предлагает вам заготовку веб-сайта для
                продвижения вашего собственного сервиса dcomms. Он располагается
                в репозитории{" "}
                <a href="https://github.com/censorship-no/chatv3-web/">
                  github.com/censorship-no/chatv3-web/
                </a>
                .
              </p>
              <p>
                Вы можете разместить сайт на любом сервере, указав свои адреса
                нод с dcomms, либо разместить его прямо на каждой worker-ноде в
                директории <b>/var/www/dcomm</b>, тогда он будет доступен,
                соответственно, по адресу
                <a href="https://server1.example.com/">server1.example.com</a>.
              </p>
              <p className="card-item-text-heading">
                Установка dcomms на одном сервере
              </p>
              <p>
                Для небольшой или экспериментальной инсталляции вы можете
                использовать один и тот же сервер для роли Docker Swarm manager
                и worker. Для этого используйте в качестве <b>&lt;nodeid&gt;</b>{" "}
                идентификатор manager-ноды.
              </p>
              <p>
                Однако для обеспечения надежности сервиса и соответствия идеи
                децентрализации в полной мере мы рекомендуем разворачивать
                несколько серверов dcomms.
              </p>
              <p className="card-item-text-heading">Настройка firewall</p>

              <p>
                dcomms использует сеть нод Docker, поэтому мы рекомендуем
                запрещать доступ ко всем другим ненужным портам на уровне каждой
                ноды. Порты, которые должны быть открыты для корректной работы
                сервиса:
              </p>
              <p>
                <span className="highlight">></span> CENO client: 28729/udp
              </p>
              <p>
                <span className="highlight">></span> Caddy (webserver): 443/tcp,
                80/tcp, 8448/tcp
              </p>
              <p>
                <span className="highlight">></span> Delta Chat
                (postfix/dovecot): 587/tcp 143/tcp
              </p>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">07</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Диагностика проблем</p>
            <div className="card-item-text-desc">
              <p>
                Для просмотра логов на сервере с ролью manager используйте
                следующие команды (для каждого приложения и worker-ноды,
                соответственно):
              </p>
              <p>
                <div className="code-block">
                  <code>
                    docker service logs dwebstack-server1_example_com_bridge -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_caddy -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_dovecot
                    -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_element
                    -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_mailadm
                    -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_postfix
                    -ft
                  </code>
                  <code>
                    docker service logs dwebstack-server1_example_com_synapse
                    -ft
                  </code>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
