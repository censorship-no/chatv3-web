import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CENO" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">CENO</h1>
          <p>
            <b>
            CENO — мобильный веб-браузер, улучшающий доступность сайтов за счет использования пиринговой (p2p) сети и безопасного обмена контентом, даже если интернет не работает. Браузер CENO — проект с открытым кодом от канадской компании eQualit.ie, разрабатывающей открытые и многофункциональные системы, ориентированные на конфиденциальность, онлайн-безопасность и свободу слова. Браузер основан на Firefox для Android (известном как Mozilla Fennec). Доступность сайтов при использовании CENO, как и в любой пиринговой сети, зависит от количества подключенных устройств. Распространяйте информацию о проекте и в нужный момент браузер CENO вас не подведет.
            </b>
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>Обзор</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-item-text">
            <p className="card-item-text-name">Настройка</p>
            <div className="card-item-install">
              <div className="card-item-install-item">
                <p className="card-item-install-number">Шаг 1</p>
                <p className="card-item-install-text">
                Зайдите в на официальный сайт проекта <a href="https://censorship.no/en/index.html" target="_blank">https://censorship.no/en/index.html</a> и установите приложение для <a href="https://play.google.com/store/apps/details?id=ie.equalit.ceno" target="_blank">Android</a>. После установки запустите CENO Browser. Всё, вы можете им пользоваться.
                </p>
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
                  </div>
                </div>
              </div>
              <div className="card-item-install-item">
                <p className="card-item-install-number">Шаг 2. Основные настройки</p>
                <p className="card-item-install-text">
                Всё. Обратите внимание, что после первого запуска у вас запустится Сервис браузера CENO и ваше устройство станет частью пиринговой сети, это необходимо для функционирования приложения.
                </p>
                <p className="card-item-install-text">
                В целом, это самый обычный браузер, привычный для многих Mozilla Firefox для мобильных устройств, но есть и отличия.
                </p>
                <p className="card-item-install-text">
                Вы можете создать приватную вкладку в меню.
                </p>
                <StaticImage
                  src="../images/ceno/1.JPG"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                Когда вы просматриваете сайты в обычных вкладках, то анонимно делитесь контентом через сеть CENO с другими пользователями. Приватные вкладки предназначены для страниц с авторизацией и с контентом, которым вы не хотите делиться.
                </p>
                <p className="card-item-install-text">
                Вы можете зайти в настройку получения контента, выбрав в меню пункт CENO. Здесь вы выбираете, из каких источников вы хотите получать данные:
                <ul>
                  <li>Напрямую с сайта;</li>
                  <li>Через сеть CENO (приватно);</li>
                  <li>Через сеть CENO (публично);</li>
                  <li>Предоставлен другими пользователями CENO.</li>
                </ul>
                </p>
                <p className="card-item-install-text">
                При получении контента напрямую с сайта работа CENO не отличается от работы обычного браузера, CENO попытается получить доступ сначала напрямую. Контент так же может быть получен через инфраструктуру сети CENO, для публичного просмотра, или для приватного просмотра. И наконец, контент может быть получен от таких же пользователей CENO Browser как и вы. CENO обеспечивает безопасность и конфиденциальность данных на всех этапах работы браузера.
                </p>
                <StaticImage
                  src="../images/ceno/2.JPG"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
              </div>
              <div className="card-item-install-item">
                <p className="card-item-install-number">
                  Шаг 3. Дополнительные настройки
                </p>
                <p className="card-item-install-text">
                При работе не через Wi-Fi, а через мобильные сети, CENO Browser запрашивает разрешение на продолжение работы. Связано это с тем, что при работы Сервиса браузера CENO, как части пиринговой сети, может происходить обмен трафиком. И только от вас зависит, готовы ли вы к дополнительному трафику через мобильные сети или нет. Если оставить CENO активным, это не приводит к существенным расходам аккумулятора и трафика. Но, конечно, это зависит от активности сети CENO.
                </p>
                <StaticImage
                  src="../images/ceno/3.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                uBlock Origin представляет собой хорошо многим знакомый блокировщик рекламы с открытым кодом. Вы можете включить блокировщик в целях экономии трафика с параметрами по умолчанию. Для настройки плагина рекомендуем обратиться к актуальной документации на официальном сайте <a href="https://ublockorigin.com/ru" target="_blank">https://ublockorigin.com/ru</a>.
                </p>
                <StaticImage
                  src="../images/ceno/4.JPG"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
