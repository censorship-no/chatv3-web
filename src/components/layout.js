/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "./../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
          <div className="equalitie-desc">
              <StaticImage
              src="../images/equalitie-logo.png"
              quality={100}
              style={{ width: "240px" }}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <p>Инициатива <a href="https://equalit.ie">eQualit.ie</a></p>
          </div>
          <div className="license-desc">
            <p>Лицензия <a href="https://github.com/censorship-no/dcomms">GNU General Public License v3.0</a></p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
