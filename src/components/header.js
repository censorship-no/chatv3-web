import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <StaticImage
            src="../images/chatv3.svg"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav navbar-list me-auto mb-2 mb-lg-0">
            <li class="nav-item navbar-list-link">
              <a class="nav-link active" aria-current="page" href="/">
                главная
              </a>
            </li>
            <li class="nav-item navbar-list-link">
              <a class="nav-link" href="/about">
                о проекте
              </a>
            </li>
            <li class="nav-item navbar-list-link">
              <a class="nav-link" href="/dcomms">
                поднять свой сервер
              </a>
            </li>
          </ul>

          {/*<ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Язык
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Украинский
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Английский
                  </a>
                </li>
              </ul>
            </li>
          </ul>*/}
        </div>
      </div>
    </nav>

    {/* <div className="container">
      <nav className="navbar">
        <a href="/">
          <StaticImage
            src="../images/chatv3.png"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </a>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="navbar-list">
          <li className="navbar-list-group">
            <ul>
              <li className="navbar-list-link">
                <a href="/">главная</a>
              </li>
              <li className="navbar-list-link">
                <a href="/about">о проекте</a>
              </li>
              <li className="navbar-list-link">
                <a href="/dcomms">поднять свой сервер</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-list navbar-list-right">
          <select className="select">
            <option>Украинский</option>
            <option>Английский</option>
          </select>
        </ul>
      </nav>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
