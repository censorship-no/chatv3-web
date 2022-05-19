import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="О проекте eQualitie" />
    <div className="container">
      <div className="top-block">
        <div className="top-text">
          <h1 className="main-heading">
            О проекте <span className="highlight">eQualitie</span>
          </h1>
          <p>
            На этом сайте вы найдете три инструкции, которые полезно иметь ввиду
            на случай возможной самоизоляции интернета со стороны России. Мы
            предлагаем вам заранее установить и потестировать сетиз приложений,
            которые могут работать автономно и вне зависимостиот
            интернет-ограничений. Если опасения о грядущем обособлении
            российской сети от мировой окажутся верными, то эта несложная
            подготовка гарантирует вам работающие каналы связи под рукой.
          </p>
        </div>
      </div>
      <h2 className="section-heading">
        <span>основное</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-number">01</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Структура проекта</p>
            <p className="card-item-text-desc">
              Если вы it-специалист, мы рекомендуем вам обратить внимание на
              раздел, в котором мы рассказываем, как поднять свой сервер для
              независимого общения и доступа к информации в сети. Это безопасно
              и, к тому же, отличная страховка на случай шатдауна.
              <br />
              <br />
              Если же вы просто пользователь Рунета и хотели бы перестраховаться
              на случай ограничения доступа к международной сети, то вам
              пригодится список из различных приложений, которые общаются по
              открытому и свободному протоколу, размещаясь на локальных
              хостингах в России. Если говорить простым языком: скачайте,
              настройте, — и шатдаун для вас не будет так уж страшен.
            </p>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">02</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Как это работает</p>
            <p className="card-item-text-desc">
              Все наши инструкции — напоминание пользователем Рунета о том, что
              можно совершить довольно незамысловатые действия и обеспечить
              связь друг с другом, а также с друзьями и родственникамиза
              рубежом, и доступ к международному информационному полю, на
              случай, если привычные способы общения перестанут работать.
              <br />
              <br />
              Для этого можно скачать приложения и подключиться к серверам,
              которым можно доверять (это простой способ), или же поднять
              собственные сервера и управлять своими данными и параметрами
              общения(это более сложный способ). Второе особенно полезно для
              организаций, ведь в таком случае ваш админ контролирует все сам.
              <br />
              <br />
              Два ключевых понятия здесь: децентрализация и федеративность. Мы
              предлагаем потестировать инструменты (приложения), у которых нет
              единого сервера, управляющего их работой. Соответственно, их
              невозможно отключить, опустив пару рубильников. Свой сервер может
              поднять любой желающий,и при этом можно свободно общаться с
              пользователями с других серверов.
              <br />
              <br />
              Сейчас на сайте представлены несколько приложений из огромной
              децентрализованной вселенной.Этот список будет постепенно
              расширяться. Приложения размещаются на серверах, которые хостятсяв
              россиских датацентрах. Если у вас есть доступ к одному из них,
              значит вы можете общаться другс другом, даже если в вашем регионе
              не будет работать интернет-подключение к Telegram, Whatsapp,
              Facebook Messenger и прочим.
            </p>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">03</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Зачем это нужно?</p>
            <p className="card-item-text-desc">
              Мы не знаем, произойдет ли изоляция Рунета, но понимаем, что
              основные каналы связи сегодня контролируются властью, а доступ к
              информации и общение с миром — это необходимый ресурс. Этот ресурс
              весьма не сложно ограничить в текущих условиях, поэтому мы
              уверены, что лучше заранее запасаться «подушками безопасности».
              Как говорится, не сули журавля в небе, а дай синицу в руки. Наша
              синица — это пример создания рескью-сета, которым уже сейчас можно
              пользоваться.
            </p>
          </div>
        </div>
      </div>
      <div className="green-alert green-alert-eq">
        <StaticImage
          src="../images/small-eq.png"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          className="card-item-logo"
        />
        <div className="green-alert-heading">
          Проект ведется силами команды eQualit.ie
        </div>
        <p className="green-alert-text">
          Это канадская организация, которая занимается защитой пользователей
          интернета и бесплатно предоставляет им сервисы Deflect и eQpress для
          противодействия хакерским атаками взломам. А еще мы регулярно
          участвуем в создании просветительских проектов и материалов, например:
          <div className="btn-list">
            <a href="https://deflect.ca/" target="_blank" className="btn">
            Deflect
            </a>
            <a href="https://censorship.no/en/index.html" target="_blank" className="btn">
            Браузер CENO
            </a>
            <a href="https://hygiene.digitalpublicsquare.com/" target="_blank" className="btn">
            The Digital Public Square
            </a>
            <a href="https://discours.io/search?q=Deflect" target="_blank" className="btn">
            Спецпроект с Discours.io
            </a>
            <a href="https://lr.7x7-journal.ru/shifropunks/" target="_blank" className="btn">
            Веб-сериал Шифропанки
            </a>
          </div>
        </p>
      </div>
      <h2 className="section-heading">
        <span>часто задаваемые вопросы</span>
      </h2>
      <div className="card-container">
        <div className="card-item">
          <div className="card-number">01</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Нужно ли моим родным и друзьям, с которыми я хочу поддерживать общение в случае изоляции российского интернета, установить те же приложения?</p>
            <p className="card-item-text-desc">
            Короткий ответ – да. Однако, так как локальный сервер можно поднять на своем локальном хостинге, то и настройками сервера можно управлять. На нашем сайте вы найдете инструменты, которые входятв Федиверс — объединение децентрализованных сервисов, работающих по принципу федерации: имея аккаунт в одном сервисе, пользователь может взаимодействовать с другими, не регистрируясь в них.
            </p>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">02</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Зачем вы поддерживаете сервера в разных российских городах? </p>
            <p className="card-item-text-desc">
            Это поможет пользователям продолжать общение при нарушении связности внутреннего Рунета. 
            </p>
          </div>
        </div>
        <div className="card-item">
          <div className="card-number">03</div>
          <div className="card-item-text">
            <p className="card-item-text-name">Может ли владелец сервера получить доступ к переписке? </p>
            <p className="card-item-text-desc">
            Только к публичным чатам. К приватным чатам, в которых он не состоит, а также к личным перепискам владелец сервера не может получить доступ, это невозможно.
            </p>
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
