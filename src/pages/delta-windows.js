import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Delta" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">Delta</h1>
          <p>
            <b>
              Delta.Chat внешне похож на всем хорошо знакомые Whatsapp или
              Telegram, но только внешне. Этот сервис обмена сообщениями не
              имеет централизованного управления и собственных серверов, вместо
              этого Delta.Chat работает через обычные почтовые серверы и
              использует SMTP для обмена шифрованными сообщениями. Для
              регистрации вам не требуется номер телефона – вам достаточно иметь
              электронную почту, чтобы начать общаться через Delta.Chat.
            </b>
            <br />
            <br />
            Delta.Chat работает на Windows, Android, iOS и Linux.
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>установка в Windows</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-item-text">
            <p className="card-item-text-name">Настройка</p>
            <div className="card-item-install">
              <div className="card-item-install-item">
                <StaticImage
                  src="../images/delta-windows/1.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-number">ШАГ 1</p>
                <p className="card-item-install-text">
                Зайдите в на официальный сайт проекта <a href="https://delta.chat/ru/" target="_blank">https://delta.chat/ru/</a> и выберите операционную систему. 
                </p>
                <p className="card-item-install-text">
                  Установить программу для Windows можно из <a href="https://www.microsoft.com/en-us/p/deltachat/9pjtxx7hn3pk" target="_blank">Microsoft Store</a> или загрузите последнюю версию программы <a href="https://delta.chat/ru/download" target="_blank">со страницы загрузки</a>.
                </p>
                <div className="card-item-download-row">
                  <span>Скачать</span>
                  <div className="btn-group">
                    <a
                      href="https://www.microsoft.com/en-us/p/deltachat/9pjtxx7hn3pk"
                      target="_blank"
                      className="btn btn-small"
                    >
                      Microsoft Store
                    </a>
                    <a
                      href="https://delta.chat/ru/download"
                      target="_blank"
                      className="btn btn-small"
                    >
                      Страница загрузки
                    </a>
                  </div>
                </div>
                <StaticImage
                  src="../images/delta-windows/2.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-text">
                Рекомендуется установить программу из Microsoft Store. Но если у вас возникнут проблемы с доступом к сервисам Microsoft – можно загрузить отдельный дистрибутив Delta.Chat и установить его.
                </p>
                <p className="card-item-install-text">
                Установка Delta.Chat из дистрибутива отличается от установки из Microsoft Store, но выполняется без особого труда. Обратите внимание, что в ОС Windows 10/11 фильтр SmartScreen в Microsoft Defender препятствует установке программы, как неопознанному программному обеспечению от неизвестного издателя. Нажмите Подробнее, а затем Выполнить в любом случае. Нет, вы не подвергните свой компьютер риску.
                </p>
                <p className="card-item-install-number">
                Установка в Linux
                </p>
                <p className="card-item-install-text">
                Загрузите с официальной страницы загрузки файлы установки или исходный код. Инструкции для Flatpak и Arch Linux приводят сами разработчики Delta.Chat на странице загрузки, сюрпризов тут никаких нет. Например, для Ubuntu используйте 
sudo dpkg -i deltachat-desktop_1.26.0_amd64.deb
                </p>
              </div>
              <div className="card-item-install-item">
                <StaticImage
                  src="../images/delta-windows/3.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-number">ШАГ 2</p>
                <p className="card-item-install-text">
                Вам потребуется только электронная почта, чтобы использовать Delta.Chat. Но прежде всего, рекомендуем проверить, совместим ли ваш почтовый сервер с Delta.Chat: <a href="https://providers.delta.chat/" target="_blank">https://providers.delta.chat/</a> К примеру, пользователям ProtonMail придётся найти другой почтовый сервис, а вот если у вас почта Outlook.com – всё отлично.
                </p>
                <p className="card-item-install-text">
                Хотя использование Delta.Chat и безопасно, но для анонимности, мы рекомендуем вам использовать адрес электронной почты такого сервиса, для регистрации в котором не требуется номер телефона для подтверждения. Потому что если вы используете свой номер телефона для подтверждения регистрации в почтовом сервисе вас однозначно можно идентифицировать по номеру телефона. Конечно, вы можете использовать и быструю регистрацию с использованием почты Gmail (Google) или подключиться через Outlook (Microsoft).
                </p>
                <p className="card-item-install-text">
                В списке совместимости провайдеров есть несколько аккаунтов сервисов которые вас устроят.
                </p>
                <p className="card-item-install-text">
                Приложение просит предоставить разрешения, необходимые или желательные для работы. Например, в ОС Windows в зависимости от настроек брандмауэра вы можете получить запрос на разрешение работы.
                </p>
                <StaticImage
                  src="../images/delta-windows/3.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-text">
                Нажмите Разрешить доступ. Без этого разрешения Delta.Chat не сможет отправлять и получать сообщения. А вот разрешения в Android носят рекомендательный характер. Вы можете решить сами, предоставлять ли приложению доступ к камере, контактам, микрофону и памяти устройства. Вы можете сами выбирать баланс между безопасностью и удобством использования Delta.Chat.
                </p>
                <p className="card-item-install-text">
                Для начала использования Delta.Chat, как мы и писали выше, вам потребуется только логин и пароль доступа к почтовому сервису. Обратите внимание, что если у вас включена двухфакторная аутентификация (что настоятельно рекомендуется для всех сервисов), то для приложения Windows потребуется сгенерировать пароль приложения. И только в Android вход возможен по процедуре с использованием OAuth.
                </p>
                <StaticImage
                  src="../images/delta-windows/4.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-text">
                Рассмотрим подключение с двухфакторной аутентификацией в Windows на примере Gmail. Вы можете ознакомиться с <a href="https://support.google.com/accounts/answer/185833" target="_blank">официальной инструкцией</a> или:
                </p>
                <p className="card-item-install-text">
                <ul>
                  <li>Перейдите в свой <a href="https://myaccount.google.com/" target="_blank">аккаунт Google</a>;</li>
                  <li>Откройте вкладку Безопасность и найдите раздел Вход в аккаунт Google;</li>
                  <li>Нажмите на Пароли приложений и создайте новый пароль, как показано в иллюстрации.</li>
                </ul>
                </p>
                <StaticImage
                  src="../images/delta-windows/5.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-text">Нажмите кнопку Создать. И из полученного окна введите пароль в соответствующее поле настроек Delta.Chat.</p>
                <p className="card-item-install-text">
                Обратите внимание, что написать из приложения вы можете как тому контакту, у которого есть Delta.Chat – так и тому, у кого Delta.Chat ещё не установлен.
                </p>
                <p className="card-item-install-text">
                Для передачи своего контакта вы можете лично показать QR-код – либо переслать изображение QR-кода или ссылку на него. Сделать это можно в главном окне приложения. Войдите в меню, выберите пункт QR код.
                </p>
              </div>
              <div className="card-item-install-item">
                <StaticImage
                  src="../images/delta-windows/6.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-screenshot"
                />
                <p className="card-item-install-number">ШАГ 3</p>
                <p className="card-item-install-text">
                Приложение имеет дополнительные настройки внешнего вида и соединения, но вы можете оставить все настройки как есть – изначально параметры настроены на максимальную безопасность работы приложения. Однако, вы можете проверить работу таких экспериментальных функций, как Трансляция местоположения по запросу и Видеочат.
                </p>
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
