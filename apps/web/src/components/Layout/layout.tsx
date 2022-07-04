/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import Header from "../Header/header"
import "../../styles/global.scss"


type LayoutPropsType = {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Layout = ({ children, footer }: LayoutPropsType) => {
  const { allSanitySiteSettings, site } = useStaticQuery(graphql`
    query SiteTitleQuery {
     allSanitySiteSettings {
        nodes {
          logo {
            asset {
              gatsbyImageData
              extension
              url
            }
          }
          siteURL
          title
          links {
            linkUrl
            linkLabel
          }
        }
      }
      site {
          siteMetadata {
            title
          }
        }
    }
  `)
  const data = allSanitySiteSettings.nodes[0]
  const fallbackTitle = site.siteMetadata.title

  return (
    <>
      <Header siteTitle={data.title || fallbackTitle} logo={data.logo} links={data.links}/>
      <div>
        <main>{children}</main>
        {footer || null}
      </div>
    </>
  )
}
