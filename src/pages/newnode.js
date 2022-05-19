import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="NewNode" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">NewNode</h1>
          <p>
            <b>
              Этот сервис создает альтернативное сетевое соединение, позволяющее
              вашему устройству обмениваться данными в ситуациях, когда
              требуемый сайт или веб-ресурс заблокирован или недоступен. NewNode
              использует гибкую, надежную одноранговую сеть для маршрутизации
              ваших данных в обход сетевых блокировок.
            </b>
            <br />
            <br />
            NewNode полностью независим от сервера и устойчив к DDoS-атакам.
            Собственно, NewNode не является привычным вам VPN-клиентом, но
            позволяет получить доступ к контенту даже при отсутствии у вас
            доступа к интернету. Поэтому не пытайтесь использовать его для
            анонимизации и не удивляйтесь, что ваш IP-адрес не изменился после
            включения NewNode.
            <br />
            <br />
            Сервис предоставляется бесплатно, не содержит рекламы, его
            использование законно и безопасно. Приложение доступно на платформе
            Android с версии 10 и новее, а так же для iPhone c iOS 12.0 и Mac
            на чипе Apple M1. NewNode поддерживает только английский язык, но у
            вас не возникнет с этим никаких проблем, так как приложение имеет
            простой интерфейс с единственной кнопкой.
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>установка на android</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-item-text">
            <p className="card-item-text-name">Настройка</p>
            <div className="card-item-install">
              <div className="card-item-install-item">
              <StaticImage
                src="../images/newnode/screen-1.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-number">ШАГ 1</p>
              <p className="card-item-install-text">Зайдите в на официальный сайт проекта и установите приложение для Android или iPhone. После установки запустите NewNode VPN. </p>

              <div className="card-item-download-row">
                <span>Скачать</span>
                <div className="btn-group">
                    <a href="https://apps.apple.com/us/app/newnode-vpn/id1473074621" target="_blank" className="btn btn-small">
                      AppStore
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.clostra.newnode.vpn" target="_blank" className="btn btn-small">
                      Google Play
                    </a>
                </div>
              </div>
              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/newnode/screen-2.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-number">ШАГ 2</p>
              <p className="card-item-install-text">При первом запуске надо ответить на несколько запросов приложения. Разрешить NewNode настроить VPN-соединение — нажмите ОК. </p>
              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/newnode/screen-3.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-number">ШАГ 3</p>
              <p className="card-item-install-text">И второе, приложение сообщает, что будут обнаруживаться расположенные рядом устройства с использованием геолокации устройства. Нажмите ОК.</p>
              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/newnode/screen-4.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-number">ШАГ 4</p>
              <p className="card-item-install-text">Приложение не имеет дополнительных настроек, с помощью кнопки по центру экрана вы можете только выключить или включить соединение. Текущее состояние выводится ниже кнопки: CONNECTED (подключено) или DISCONNECTED (отключено). В качестве статистики использования (USAGE), внизу экрана выводится объем прямого трафика (Direct) и трафика через узлы NewNode (Through Peers). </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
