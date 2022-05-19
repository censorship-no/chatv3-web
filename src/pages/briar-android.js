import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Briar" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">Briar</h1>
          <p>
            <b>
              Briar — это безопасная программа обмена сообщениями. Briar по
              умолчанию использует сеть Tor и может создавать локальные
              меш-сети, используя Bluetooth на телефоне. То есть при полном
              отсутствии интернета, вы можете обмениваться сообщениями через
              Bluetooth-соединение или через Wi-Fi.
            </b>
            <br />
            <br />
            Кроме обмена сообщениями, с Briar вы сможете создать Форум и
            публиковать в Блог.
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
                <p className="card-item-install-number">Шаг 1. Установка</p>
                <p className="card-item-install-text">
                  Зайдите в на официальный сайт проекта{" "}
                  <a href="https://briarproject.org/" target="_blank">
                    https://briarproject.org/
                  </a>{" "}
                  и установите приложение для Android через{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=org.briarproject.briar.android"
                    target="_blank"
                  >
                    Google Play
                  </a>
                  . Если у вас возникнут проблемы с доступностью сервисов
                  Google, вы можете воспользоваться установкой Briar через{" "}
                  <a href="https://f-droid.org/" target="_blank">
                    F-Droid
                  </a>{" "}
                  (каталог свободных приложений с открытым исходным кодом).
                </p>
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
                  </div>
                </div>
              </div>
              <div className="card-item-install-item">
                <StaticImage
                  src="../images/briar-android/2.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-number">Шаг 2. Регистрация</p>
                <p className="card-item-install-text">
                  При первом запуске надо придумать псевдоним и пароль. Обратите
                  внимание, если вы удалите приложение или забудете –
                  восстановить учётную запись невозможно.
                </p>
                <StaticImage
                  src="../images/briar-android/3.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  На следующем этапе вам предагается так же разрешить фоновые
                  подключения для Briar. Это необходимо для получения сообщений
                  в фоновом режиме, а не только когда приложение активно. Если
                  вы считаете необходимым оперативное получение сообщений –
                  нажмите Разрешить поключения и разрешите системе отключить
                  оптимизацию расхода заряда для Briar. Вы уже практически
                  готовы к общению в Briar.
                </p>
                <StaticImage
                  src="../images/briar-android/4.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  Осталось добавить контакты.
                </p>
              </div>
              <div className="card-item-install-item">
                <StaticImage
                  src="../images/briar-android/5.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-number">
                  Шаг 3. Добавление контактов и обмен сообщениями
                </p>
                <p className="card-item-install-text">
                  Briar предлагает два варианта добавления контактов: через
                  обмен ссылками (дистанционно) или при личном контакте с
                  будущим собеседником.
                </p>
                <p className="card-item-install-text">
                  Рассмотрим обмен ссылками. Нажмите Добавить контакт на
                  расстоянии.
                </p>
                <StaticImage
                  src="../images/briar-android/6.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  Просто передайте сгенерированную ссылку контакту, получите
                  такую же ссылку от него и введите в пустое поле. Нажмите
                  Продолжить.
                </p>
                <StaticImage
                  src="../images/briar-android/7.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  Задайте понятный для вас ник для контакта. Вряд ли стоит
                  использовать настоящее имя.
                </p>
                <StaticImage
                  src="../images/briar-android/8.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  Дождитесь аналогичных действий со стороны вашего контакта.
                </p>
                <StaticImage
                  src="../images/briar-android/91.jpg"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
                <p className="card-item-install-text">
                  Поздравляю, теперь вам есть с кем общаться в Briar. Повторите
                  со всеми контактами. При личной встрече процесс намного проще.
                  При добавлении контакта выберите Добавить контакт поблизости.
                  Briar запросит у вас разрешения включить геолокацию,
                  фотокамеру и предложит сделать устройство видимым по Bluetooth
                  на 120 секунд. Затем Briar сгенерирует QR-код и включит
                  камеру. Просто наведите камеру на QR-код контакта. Не надо
                  пересылать QR-код – обмен кодами должен происходить лично,
                  чтобы вы точно знали – кто ваш контакт.
                </p>
                <p className="card-item-install-text">
                  Вы так же можете представить ваши контакты друг-другу, чтобы у
                  них не было необходимости встречаться лично.
                </p>
                <p className="card-item-install-text">
                  Процесс обмена сообщениями для пользователя мало отличается от
                  обычного пользователя, например, зеленый кружочек у имени
                  вашего контакта означает, что пользователь в онлайне и вы
                  подключены через интернет, Wi-Fi или Bluetooth.
                </p>
                <p className="card-item-install-text">
                  Но есть нюансы, которые хорошо видно на иллюстрации.
                </p>
                <StaticImage
                  src="../images/briar-android/10.png"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  height={500}
                  className="card-item-logo"
                />
              </div>
              <div className="card-item-install-item">
                <p className="card-item-install-number">
                  Шаг 4. Настройки Briar, работа Блогов и Форумов
                </p>
                <p className="card-item-install-text">
                  Нажмите на кнопку меню в правом верхнем углу Briar. В нижней
                  части меню вы увидите список доступных соединений: Интернет,
                  Wi-Fi и Bluetooth. Нажмите на любой из значков соединений, для
                  включения или отключения соединения. Обратите внимание – при
                  соединении через Интернет – на самом деле, для обеспечения
                  конфиденциальности соединение проходит через сеть Tor.
                </p>
                <p className="card-item-install-text">
                  Подробнее все возможности Briar описаны в <a href="https://briarproject.org/manual/ru/" target="_blank">официальном
                  руководстве на русском языке</a>.
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
