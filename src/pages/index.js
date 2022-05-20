import * as React from "react"
import { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MessengerIcon from "../images/messenger-icon.svg"
import WebIcon from "../images/web-icon.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {

  const servers = [
    {
        title: "Москва",
        siteUrl: "https://moscow.chatv3.ru",
        matrixUrl: "matrix.moscow.chatv3.ru",
        elementUrl: "https://chat.moscow.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-moscow.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Санкт-Петербург",
        siteUrl: "https://piter.chatv3.ru",
        matrixUrl: "matrix.piter.chatv3.ru",
        elementUrl: "https://chat.piter.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-piter.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Самара",
        siteUrl: "https://samara.chatv3.ru",
        matrixUrl: "matrix.samara.chatv3.ru",
        elementUrl: "https://chat.samara.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-samara.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Краснодар",
        siteUrl: "https://krasnodar.chatv3.ru",
        matrixUrl: "matrix.krasnodar.chatv3.ru",
        elementUrl: "https://chat.krasnodar.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-krasnodar.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Екатеринбург",
        siteUrl: "https://ekaterinburg.chatv3.ru",
        matrixUrl: "matrix.ekaterinburg.chatv3.ru",
        elementUrl: "https://chat.ekaterinburg.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-ekaterinburg.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Новосибирск",
        siteUrl: "https://novosibirsk.chatv3.ru",
        matrixUrl: "matrix.novosibirsk.chatv3.ru",
        elementUrl: "https://chat.novosibirsk.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-novosibirsk.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Владивосток",
        siteUrl: "https://vladivostok.chatv3.ru",
        matrixUrl: "matrix.vladivostok.chatv3.ru",
        elementUrl: "https://chat.vladivostok.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-vladivostok.chatv3.ru-KwNAtP6J.png",
    },
    {
        title: "Хабаровск",
        siteUrl: "https://khabarovsk.chatv3.ru",
        matrixUrl: "matrix.khabarovsk.chatv3.ru",
        elementUrl: "https://chat.khabarovsk.chatv3.ru",
        deltaChatUrl: "/static/dcaccount-khabarovsk.chatv3.ru-KwNAtP6J.png",
    },
  ];

  const serversList = servers.map((item) => <a href={item.siteUrl} className="btn">{item.title}</a>);
  const matrixServersSelect = servers.map((item) => <option value={item.matrixUrl}>{item.title}</option>);
  const deltaServersSelect = servers.map((item) => <option value={item.siteUrl}>{item.title}</option>);

  const [currentMatrixUrl,setCurrentMatrixUrl] = useState(servers[0].matrixUrl)
  const [currentElementUrl,setCurrentElementUrl] = useState(servers[0].elementUrl)
  const [currentDeltaQRUrl,setCurrentDeltaQRUrl] = useState(servers[0].deltaChatUrl)

  const onMatrixServerSelect = (event) => {
    let value = event.target.value
    setCurrentMatrixUrl(value)
    value = value.replace('matrix.', 'https://chat.')
    setCurrentElementUrl(value)
  }

  const onDeltaServerSelect = (event) => {
    let value = event.target.value
    value = value.replace('matrix.', '/static/dcaccount-')
    value = value + '-KwNAtP6J.png'
    setCurrentDeltaQRUrl(value)
  }

  return (
    <Layout>
      <Seo title="Альтернативные способы коммуникации на случай изоляции Рунета " />
      {/* {postNodes && postNodes.length > 0 && (
      <BlogPostPreviewGrid nodes={postNodes} />
    )} */}
      {/* {homes.map(home => <div>{home.name}</div>)}
    {postNodes} */}
      
      {/*<p className="name-test">{data.allSanityMessenger.node}</p>
       {
        data.allSanityMessenger.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      } */}

      <div className="container">
        <div className="top-block">
          <div className="top-text">
            <h1 className="main-heading">
              Альтернативные способы коммуникации{" "}
              <span className="highlight">на случай изоляции Рунета</span>
            </h1>
            <p>
              Мы предлагаем вам заранее установить и потестировать сет из
              приложений, которые могут работать автономно и вне зависимости от
              интернет-ограничений. Если опасения о грядущем обособлении
              российской сети от мировой окажутся верными, то эта несложная
              подготовка гарантирует вам работающие каналы связи под рукой. Мы
              создали несколько серверов на территории России для того, чтобы
              наша команда могла обеспечить возможность коммуникации между
              пользователями по локальной сети, что бы ни случилось. Список
              будет пополняться.
            </p>
          </div>
        </div>


        <h2 className="section-heading">
          <span>
            серверы
          </span>
        </h2>
        <div className="server-choice">
            {/*<div className="green-alert green-alert-small">
              <StaticImage
                src="../images/check-icon.svg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
              />{" "}
              Вы подключены к&nbsp;серверу&nbsp;<span>Москва</span>
            </div>*/}
            <p>
                Этот сайт и установочные файлы приложений доступны также на других серверах проекта Chat v.3.<br />
                Запишите их на случай, если привычный для вас сервер будет заблокирован.
            </p>
            <div className="server-choice-list">
              <div className="btn-list">
                {serversList}
              </div>
            </div>
        </div>

        <h2 className="section-heading">
          <span>
            <img src={MessengerIcon} alt=""/>
            мессенджеры
          </span>
        </h2>
        <div className="card-container">
          <div className="card-item">
            <StaticImage
              src="../images/element-matrix.svg"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="card-item-logo"
            />
            <div className="card-item-text">
              <p className="card-item-text-badge">
                децентрализованный протокол обмена сообщениями
              </p>
              <p className="card-item-text-name">Element (Matrix)</p>
              <p className="card-item-text-desc">
                Matrix — децентрализованный протокол обмена сообщениями с
                прилагающимся к нему клиентом Element, который может стать
                альтернативой привычным мессенджерам. Есть весьма удобные
                мобильные клиенты под Android и iOS с push-уведомлениями, и
                десктопные клиенты для Windows, Linux, macOS. Протокол устроен
                по принципу федерации, которая позволяет мгновенно получать и
                отправлять сообщения, создавать общие чаты для пользователей
                разных серверов, совершать видео- и аудиозвонки. Element
                обладает всеми современными функциями, которые присущи другим
                популярным мессенджерам (за исключением голосовых сообщений).
                Можно создавать приватные групповые чаты, которые доступны
                только их создателю и приглашенным пользователям. Регистрация не
                займет у вас больше минуты.{" "}
              </p>
              <div className="card-item-server">
                <span>Сервер</span>
                <div className="card-item-server-choice">
                  <input
                    type="text"
                    className="text-input"
                    readOnly
                    value={currentMatrixUrl}
                  />&nbsp;
                  <select className="select" onChange={onMatrixServerSelect}>
                    {matrixServersSelect}
                  </select>
                </div>
                <a
                  href={currentElementUrl}
                  target="_blank"
                  className="btn btn-small"
                >
                  Регистрация через браузер
                </a>
              </div>
              <div className="card-item-download">
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для десктопа и браузера</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a
                        href="/element_mac.pdf"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Для macOS
                      </a>
                      <a href="" className="btn btn-small">
                        Для Windows
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://packages.riot.im/desktop/install/macOS/Element.dmg"
                        className="btn btn-small"
                      >
                        macOS
                      </a>
                      <a
                        href="https://packages.riot.im/desktop/install/win32/x64/Element%20Setup.exe"
                        className="btn btn-small"
                      >
                        Windows
                      </a>
                      <a
                        href="https://element.io/get-started#linux-details"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Linux
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для смартфона</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a
                        href="/element_ios.pdf"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Для iOS
                      </a>
                      <a href="" className="btn btn-small">
                        Для Android
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://apps.apple.com/app/vector/id1083446067"
                        target="_blank"
                        className="btn btn-small"
                      >
                        AppStore
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=im.vector.app"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Google Play
                      </a>
                      <a href="/package/element/files/" className="btn btn-small">
                        Локально для Android
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <StaticImage
              src="../images/delta.png"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="card-item-logo"
            />
            <div className="card-item-text">
              <p className="card-item-text-badge">
                зашифрованная служба обмена сообщениями
              </p>
              <p className="card-item-text-name">Delta.chat</p>
              <p className="card-item-text-desc">
                Delta.chat — зашифрованная служба обмена сообщениями,
                использующая протокол электронной почты (SMTP). Дизайн похож на
                WhatsApp. Пользователям необходимо установить приложение для
                смартфона и добавить сервер с помощью QR-кода, ссылка на который
                приведена ниже. Другие люди могут общаться с вами, сгенерировав
                QR-код приглашения в чат в самом приложении.{" "}
              </p>
              <div className="card-item-server">
                <span>Сервер</span>
                <div className="card-item-server-choice">
                  <select className="select" onChange={onDeltaServerSelect}>
                    {deltaServersSelect}
                  </select>
                </div>
                <a href={currentDeltaQRUrl} target="_blank" className="btn btn-small">
                  Открыть QR-код
                </a>
              </div>
              <div className="card-item-download">
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для десктопа и браузера</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a
                        href="/delta_macos.pdf"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Для macOS
                      </a>
                      <a href="/delta-windows" className="btn btn-small">
                        Для Windows
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://github.com/deltachat/deltachat-desktop/releases/download/v1.28.2/DeltaChat-1.28.2.dmg"
                        target="_blank"
                        className="btn btn-small"
                      >
                        macOS
                      </a>
                      <a
                        href="https://github.com/deltachat/deltachat-desktop/releases/download/v1.28.2/DeltaChat.Setup.1.28.2.exe"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Windows
                      </a>
                      <a
                        href="https://flathub.org/apps/details/chat.delta.desktop"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Linux
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для смартфона</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a
                        href="/delta_ios.pdf"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Для iOS
                      </a>
                      <a href="/delta-android" className="btn btn-small">
                        Для Android
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://apps.apple.com/us/app/delta-chat/id1459523234"
                        target="_blank"
                        className="btn btn-small"
                      >
                        AppStore
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=chat.delta"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Google Play
                      </a>
                      <a href="/package/deltachat/files/" className="btn btn-small">
                        Локально для Android
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <StaticImage
              src="../images/briar.svg"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="card-item-logo"
            />
            <div className="card-item-text">
              <p className="card-item-text-badge">
                безопасная программа обмена сообщениями
              </p>
              <p className="card-item-text-name">Briar</p>
              <p className="card-item-text-desc">
                Это еще одна безопасная программа обмена сообщениями. Briar по
                умолчанию использует сеть Tor и может создавать локальные
                меш-сети, используя Bluetooth на телефоне. То есть при полном
                отсутствии интернета вы можете обмениваться сообщениями через
                Bluetooth-соединение или через Wi-Fi. Кроме обмена сообщениями,
                с Briar вы сможете создать Форум и публиковать в Блог.{" "}
              </p>
              <div className="card-item-download">
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для смартфона</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a href="/briar-android" className="btn btn-small">
                        Для Android
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://play.google.com/store/apps/details?id=org.briarproject.briar.android"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Google Play
                      </a>
                      <a href="/package/briar/files/" className="btn btn-small">
                        Локально для Android
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="section-heading">
          <span>
            <img src={WebIcon} alt=""/>{" "}
            Доступ к веб-страницам и сайтам
          </span>
        </h2>
        <div className="card-container">
          <div className="card-item">
            <StaticImage
              src="../images/newnode.png"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="card-item-logo"
            />
            <div className="card-item-text">
              <p className="card-item-text-badge">
                альтернативное сетевое соединение
              </p>
              <p className="card-item-text-name">NewNode</p>
              <p className="card-item-text-desc">
                Этот сервис создает альтернативное сетевое соединение,
                позволяющее вашему устройству обмениваться данными в ситуациях,
                когда требуемый сайт или веб-ресурс заблокирован или недоступен.
                NewNode использует гибкую, надежную одноранговую сеть для
                маршрутизации ваших данных в обход сетевых блокировок. NewNode
                полностью независим от сервера и устойчив к DDoS-атакам.
                Собственно, NewNode не является привычным вам VPN-клиентом, но
                позволяет получить доступ к контенту даже при отсутствии у вас
                доступа к интернету. Поэтому не пытайтесь использовать его для
                анонимизации и не удивляйтесь, что ваш IP-адрес не изменился
                после включения NewNode. Сервис предоставляется бесплатно, не
                содержит рекламы, его использование законно и безопасно.
                Приложение доступно на платформе Android с версии 10 и новее, а
                так же для iPhone c iOS 12.0 и Mac на чипе Apple M1. NewNode
                поддерживает только английский язык, но у вас не возникнет с
                этим никаких проблем, так как приложение имеет простой интерфейс
                с единственной кнопкой.{" "}
              </p>
              <div className="card-item-download">
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для смартфона</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a
                        href="/newnode_ios.pdf"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Для iOS
                      </a>
                      <a href="/newnode" className="btn btn-small">
                        Для Android
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://apps.apple.com/us/app/newnode-vpn/id1473074621"
                        target="_blank"
                        className="btn btn-small"
                      >
                        AppStore
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.clostra.newnode.vpn"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Google Play
                      </a>
                      <a href="/package/newnode/files/" className="btn btn-small">
                        Локально для Android
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <StaticImage
              src="../images/ceno.png"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="card-item-logo"
            />
            <div className="card-item-text">
              <p className="card-item-text-badge">мобильный веб-браузер</p>
              <p className="card-item-text-name">CENO</p>
              <p className="card-item-text-desc">
                CENO — мобильный веб-браузер, улучшающий доступность сайтов за
                счет использования пиринговой (p2p) сети и безопасного обмена
                контентом, даже если интернет не работает. Браузер CENO — проект
                с открытым кодом от канадской компании eQualit.ie,
                разрабатывающей открытые и многофункциональные системы,
                ориентированные на конфиденциальность, онлайн-безопасность и
                свободу слова. Браузер основан на Firefox для Android (известным
                как Mozilla Fennec). Доступность сайтов при использовании CENO,
                как и в любой пиринговой сети, зависит от количества
                подключенных устройств. Распространяйте информацию о проекте и в
                нужный момент браузер CENO вас не подведет.{" "}
              </p>
              <div className="card-item-download">
                <div className="cart-item-download-links">
                  <h3 className="middle-heading">Для смартфона</h3>
                  <div className="card-item-download-row">
                    <span>Инструкции</span>
                    <div className="btn-group">
                      <a href="/ceno" className="btn btn-small">
                        Для Android
                      </a>
                    </div>
                  </div>
                  <div className="card-item-download-row">
                    <span>Скачать</span>
                    <div className="btn-group">
                      <a
                        href="https://play.google.com/store/apps/details?id=ie.equalit.ceno"
                        target="_blank"
                        className="btn btn-small"
                      >
                        Google Play
                      </a>
                      <a href="/package/ceno/files/" className="btn btn-small">
                        Локально для Android
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="green-alert">
          <a href="https://github.com/censorship-no/dcomms">
            <StaticImage
              src="../images/github.png"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              height={110}
              className="card-item-logo"
            />
          </a>
          <div className="green-alert-heading">
            Присоединяйтесь к&nbsp;dcomms!{" "}
          </div>
          <p className="green-alert-text">
            Создавайте собственные сервера. Мы открыты к сотрудничеству, новым
            предложениям и будем рады волонтерам.{" "}
          </p>
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
}

export const query = graphql`
query MyQuery {
  allSanityMessenger {
    totalCount
    edges {
      node {
        _id
        name
        summary
        logo {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
        }
      }
    }
  }
  allSanityWebsite {
    totalCount
    edges {
      node {
        id
        name
        summary
        logo {
          _key
          _type
          _rawAsset
          _rawCrop
          _rawHotspot
        }
      }
    }
  }
}
`

export default IndexPage
