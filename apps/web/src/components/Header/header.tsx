import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { CompatibleImage } from "../CompatibleImage"
import { LinkInfo, SanityImageAsset } from "../../../typings/schema"

export type HeaderType = {
  links: LinkInfo[];
  siteTitle: string;
  logo: {
    asset: SanityImageAsset & { altText?: string | null, }
  }
}

const Header = ({ siteTitle, logo, links }: HeaderType) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <CompatibleImage asset={logo.asset} role="presentation" style={{ width: 154 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-list me-auto mb-2 mb-lg-0">
            {links.map(item => (
              <li className="nav-item navbar-list-link" key={item.linkUrl}>
                <Link className="nav-link" activeClassName="active" aria-current="page" to={item.linkUrl || ""}>
                  {item.linkLabel}
                </Link>
              </li>))}

          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
