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
            Delta.Chat внешне похож на всем хорошо знакомые Whatsapp или Telegram, но только внешне. Этот сервис обмена сообщениями не имеет централизованного управления и собственных сервеова, вместо этого Delta.Chat работает через обычные почтовые серверы и использует SMTP для обмена шифрованными сообщениями. Для регистрации вам не требуется номер телефона – вам достаточно иметь электронную почту, чтобы начать общаться через Delta.Chat. Delta.Chat работает на Windows, Android, iOS и Linux.
            </b>
            <br />
            <br />
            Delta.Chat доступен в <a href="https://play.google.com/store/apps/details?id=chat.delta" target="_blank">Google Play</a>. 
            <br />
            <br />
            Примечание: в случае проблем с доступностью сервисов Google получить приложение можно через <a href="https://f-droid.org/packages/com.b44t.messenger/" target="_blank">F-Droid</a> (потребуется установка магазина приложений с открытым исходным кодом F-Droid), а также через <a href="https://www.amazon.com/dp/B0864PKVW3/" target="_blank">Amazon appstore</a> или просто загрузить установочный APK-файл с <a href="https://delta.chat/ru/download" target="_blank">официальной страницы загрузки</a> (потребуется разрешить на вашем устройстве установку APK-файлов).
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>установка на android</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-item-text">
            <p className="card-item-install-number">ШАГ 1</p>
            <p className="card-item-install-text">Итак, скачиваем и открываем приложение:</p>
            <div className="card-item-download-row">
                <div className="btn-group">
                    <a href="https://play.google.com/store/apps/details?id=chat.delta" target="_blank" className="btn btn-small">
                      Google Play
                    </a>
                </div>
            </div>
            <div className="card-item-install">
              <div className="card-item-install-item">
              <StaticImage
                src="../images/delta-android/1.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/2.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-text">Для подключения к серверу кликаем на “Сканировать QR-код”. Разрешаем приложению Delta Chat снимать фото и видео. </p>
              <p className="card-item-install-text">Ссылки на QR-кода для подключения к серверам вы можете найти на <a href="/">Главной странице</a> Chatv3. </p>
              <p className="card-item-install-text">Открываем QR-код на другом устройстве. Наводим камеру смартфона на QR-код. </p>

              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/delta-android/3.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/4.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-number">ШАГ 2</p>
              <p className="card-item-install-text">
                Подождите несколько секунд и в появившемся окне “Создать новый адрес электронной почты…” кликните “Ok”.
                Ура! На следующем экране вы получите подтверждение регистрации и сможете ввести любое имя, которым вам было бы удобно пользоваться для общения в приложении.
              </p>
              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/delta-android/4.1.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/4.2.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <p className="card-item-install-text">Отлично! Дело в шляпе. Осталось освоить азы использования приложения.</p>
              <p className="card-item-install-number">ШАГ 3</p>
              <p className="card-item-install-text">Итак, сейчас перед вами экран, на котором вы найдете все ваши персональные и групповые чаты. Возможно, приложение отправит вам запрос на работу в фоновом режиме. Вы можете “Отклонить” или “Разрешить” работу.  </p>
              </div>
              <div className="card-item-install-item">
              <StaticImage
                src="../images/delta-android/4.3.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/5.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              </div>
              <div className="card-item-install-item">
              <p className="card-item-install-number">ШАГ 4</p>
              <p className="card-item-install-text">Теперь вы можете: </p>
              <StaticImage
                src="../images/delta-android/6.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">
                <ol>
                  <li>Сообщить свое имя/адрес человеку, с которым вы хотите связаться. В этом случае, этот человек сможет написать вам сообщение.</li>
                  <li>Отправить через другой мессенджер свой персональный QR-код человеку, с которым вы хотите связаться. Если этот человек находится рядом, то проще всего показать ему свой код и предложить его отсканировать.</li>
                  <li>Добавить потенциального адресата в свои доверенные контакты через сканирование его QR-кода.</li>
                  <li>Написать сообщение человеку, используя его имя/адрес, который для этого следует предварительно узнать. Важно! Вы можете отправить письмо не только на адрес, созданный адресатом в Delta Chat, но и на любой другой email адрес. </li>
                  <li>Создать групповой чат для общения с несколькими адресатами.</li>
                </ol>
              </p>

              <p className="card-item-install-number">Давайте рассмотрим все по порядку</p>
              <p className="card-item-install-text">1. Сообщить свое имя/адрес человеку, с которым вы хотите связаться. В этом случае, этот человек сможет написать вам сообщение. </p>
              <p className="card-item-install-text">Свой адрес найти очень легко. В правом верхнем углу вы найдете иконку Настройки.</p>
              <p className="card-item-install-text">По клику на значок, откроется выпадающее меню, в котором вы найдете пункт “Настройки”. Смело переходите в настройки: там вы сможете найти свой персональный адрес. Поделитесь им с другом и ждите сообщения!</p>
              <StaticImage
                src="../images/delta-android/7.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/8.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              </div>
              <div className="card-item-install-item">

              <p className="card-item-install-text">2. Отправить через другой мессенджер свой персональный QR-код человеку, с которым вы хотите связаться. Если этот человек находится рядом, то проще всего показать ему свой код и предложить его отсканировать.</p>
              <p className="card-item-install-text">Найти свой персональный QR-код очень просто. Нужно кликнуть на иконку QR-кода на основном экране приложения. Затем нужно выбрать “QR-код приглашения”.</p>

              <StaticImage
                src="../images/delta-android/9.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/10.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">Вы можете отправить будущему адресату скриншот QR-кода или воспользоваться иконкой “Поделиться” в правом верхнем углу экрана: </p>

              <StaticImage
                src="../images/delta-android/11.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              </div>
              <div className="card-item-install-item">

              <p className="card-item-install-text">3. Добавить потенциального адресата в свои доверенные контакты через сканирование его QR-кода.</p>
              <p className="card-item-install-text">Не уходите далеко! Как вы уже наверняка заметили, на экране, который появляется по клику на иконку с QR-кодом на основном экране, есть опция “Сканировать QR-код”. Именно она позволит вам отсканировать QR-код вашего контактного лица.</p>

              <StaticImage
                src="../images/delta-android/12.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">Разумеется, перед тем, как это делать, следует попросить своего будущего адресата поделиться с вами QR-кодом через другое приложение или, если человек находится радом с вами – попросить его открыть свой QR-код, как описано в пункте 2.</p>

              <StaticImage
                src="../images/delta-android/13.png"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              </div>
              <div className="card-item-install-item">

              <p className="card-item-install-text">4. Написать сообщение человеку, используя его имя/адрес, который для этого следует предварительно узнать. Важно! Вы можете отправить письмо не только на адрес, созданный адресатом в Delta Chat, но и на любой другой email адрес.</p>
              <p className="card-item-install-text">Для этого следует кликнуть на значок + в правом нижнем углу экрана.</p>

              <StaticImage
                src="../images/delta-android/14.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">Перед вами, новый экран, в верхней части которого расположена строка для ввода адреса вашего будущего собеседника. Сюда можно ввести как адрес, созданный в Delta Chat, так и любой другой почтовый адрес. После этого приложение попросит вашего разрешения создать чат с владельцем адреса, который вы только что ввели. Нажмите “Ок”, если все верно. </p>

              <StaticImage
                src="../images/delta-android/15.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/15.1.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">Отлично! Можно начинать общение.</p>

              <StaticImage
                src="../images/delta-android/15.2.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              </div>
              <div className="card-item-install-item">

              <p className="card-item-install-text">5. Создать групповой чат для общения с несколькими адресатами</p>
              <p className="card-item-install-text">Итак, вы решили создать группу или, предположим, семейный чат, и кликнули на иконку + на основном экране. Следующий шаг: кликаем на функцию “Новая группа” и переходим к странице создания общего чата. Обязательно назовите свою группу.  После того, как группа получит название, вы сможете открыть QR-код приглашения в чат и разослать его тем, кого хотели бы в это чате видеть в качестве собеседников. Вы также можете добавить собеседников в чат, по принципу, описанному в пункте 4.</p>

              <StaticImage
                src="../images/delta-android/14.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/16.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />
              <StaticImage
                src="../images/delta-android/17.jpg"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                height={500}
                className="card-item-logo"
              />

              <p className="card-item-install-text">Если вы, например, создаете семейный чат и предварительно добавили адреса всех членов семьи по принципу, описанному в пунктах 3 и 4 этой инструкции, то вам будет значительно проще добавить всех в группу, Для этого нужно просто отметить имена из списка кликнув на чекбоксы справа.</p>

              <p className="card-item-install-text">Отлично! Теперь вы знаете, как использовать базовые функции приложения. Удачи!</p>
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
