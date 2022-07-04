import * as React from "react"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

import { Hero } from "../components/Hero"
import { ServerList } from "../components/Servers"
import { MessengerList } from '../components/Messengers'
import { Equalitie } from "../components/Equalitie"
import { Footer } from '../components/Footer';
import { CardList } from "../components/CardList"
import {
  EqualitieBlock, Messengers, Page, Servers, Websites, CardList as CardListType,
  CardListB,
  Footer as FooterType,
  Instruction as InstructionType,
  SectionText,
  ServerItem
} from "../../typings/schema"
import { Instruction } from "../components/Instruction"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const PageTemplate = ({ data }) => {
  const { sanityPage: page } = data
  const pageComponent = getPageComponents(page)
  const footer = getFooter(page)
  return (
    <Layout footer={footer}>
      <Seo title={page.metaTitle} />
      <div className="container">{pageComponent}</div>
    </Layout>
  )
}

export default PageTemplate

type Component = Servers
  | Messengers
  | Websites
  | EqualitieBlock
  | CardListType
  | CardListB
  | FooterType
  | InstructionType

function getPageComponents(pageData: Page) {
  console.log('%c pagedata', 'background: red; color: white; display: block;', pageData);
  return (
    <>
      <Hero title={pageData?.heroTitle || ""} text={pageData?.heroText || ""} />
      {pageData?.sectionItems?.map((item) => pageBuilder(item))}
    </>
  )
}

function pageBuilder(component: Component): JSX.Element | null {
  console.log('%c component', 'background: navy; color: white; display: block;', component);
  if (component?._type === "servers") {
    return (
      <ServerList
        key={component._id}
        title={component.sectionTitle || ""}
        text={component.sectionText || ""}
        sectionItems={component.sectionItems || []}
      />
    )
  }
  if (component?._type === "messengers") {
    return <MessengerList
      key={component._id}
      title={component!.sectionTitle || ""}
      text={component!.sectionText as SectionText}
      sectionItems={component.items}
      iconURL={component!.icon!.asset.url} />
  }

  if (component?._type === "websites") {
    return <MessengerList
      key={component._id}
      title={component.sectionTitle || ""}
      text={component.sectionText as SectionText}
      sectionItems={component.items}
      iconURL={component!.icon!.asset.url} />
  }

  if (component?._type === "equalitieBlock") {
    return <Equalitie {...component} key={component!.title} />
  }
  if (component?._type === "cardList" || component?._type === "cardList_b") {
    return <CardList {...component} key={component.sectionTitle} />
  }

  if (component?._type === "instruction") {
    return <Instruction {...component} key={component.id}/>
  }
  return null;
}

function getFooter(pageData: Page): React.ReactNode{
  const footerData = pageData?.sectionItems?.find(item => item?._type === "footer") as FooterType | undefined
  if (!footerData) return null;

  return <Footer {...footerData} />
}

export const query = graphql`
  query PageQuery($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      _type
      name
      heroText: _rawHeroText
      heroTitle {
        list
        style
        _type
        _key
        children {
          marks
          text
          _type
          _key
        }
      }
      metaTitle
      sectionItems {
        ...servers
        ...messengers
        ...websites
        ...equalitie
        ...cards
        ...cardsb
        ...instruction
        ...footer
      }
      slug {
        current
      }
    }
  }

  fragment servers on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites {
    ... on SanityServers {
      _type
      _id
      sectionTitle
      sectionText {
        _type
        list
        style
        children {
          _key
          _type
          text
          marks
        }
        _key
      }
      sectionItems {
        server {
          matrixUrl
          serverName
          siteUrl
          elementUrl
          _id
        }
      }
    }
  }



  fragment websites on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites {
    ... on SanityWebsites {

      sectionText {
      style
      list
      children {
        text
        marks
        _type
        _key
      }
    }
    sectionName
    sectionTitle
    icon {
      asset {
        gatsbyImageData
        url
      }
    }
    items {

        badge
        logo {
          asset {
            gatsbyImageData
            url
          }
        }
        mobileInfoTitle
        mobileLinkBlock
        name
        summary
        mobileInfoItems {
          linkBlockTitle
          linkItem {
            linkUrl
            linkName
            linkLabel
            _id
          }
        }
        _id
        desktopInfoTitle
        desktopLinkBlock
        desktopInfoItems {
          linkBlockTitle
          _type
          _key
          linkItem {
            _id
            _key
            linkLabel
            linkUrl
          }
        }

    }
    _type
    _id
    _key

    }
  }

  fragment messengers on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites {
    ... on SanityMessengers {
        _id
        _key
        _type
        sectionTitle
        sectionText {
          list
          style
          _type
          _key
          children {
            text
            marks
            _type
            _key
          }
        }
        items {
          summary
          _id
          _type
          _key
          badge
          desktopInfoItems {
            _type
            _key
            linkBlockTitle
            linkItem {
              linkUrl
              linkName
              linkLabel
              _type
              _key
            }
          }
          desktopInfoTitle
          desktopLinkBlock
          logo {
            asset {
              _key
              _type
              altText
              gatsbyImageData
              url
            }
            _type
            _key
          }
          mobileInfoItems {
            linkBlockTitle
            linkItem {
              _key
              _type
              linkLabel
              linkName
              linkUrl
            }
          }
          mobileLinkBlock
          mobileInfoTitle
          name
          serverAction
          serverPickBlock
          hasQRCodeLinks
          qrCodes {
            url
            relatedServer {
              serverName
            }
          }
        }
        icon {
          _type
          _key
          asset {
            altText
            filename
            height
            label
            path
            url
            width
            title
          }
        }
      }
  }

  fragment equalitie on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites {
    ... on SanityEqualitieBlock {
        _type
        title
        hasLinksSection
        text
        logo {
          asset {
            url
            gatsbyImageData
          }
        }
        links {
          linkUrl
          linkName
          linkLabel
          _id
        }
        _id
      }
  }
  fragment footer on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites {
    ... on SanityFooter {
      _type
      id
      logoAltText
      logo {
        asset {
          url
          extension
          gatsbyImageData
        }
      }
      logoAltText
      footerTagline: _rawFooterTagline
      footerLicenseInfo: _rawFooterLicenseInfo
    }
  }

  fragment cards on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites{
    ... on SanityCardList {
        id
        _type
        sectionTitle
        cards {
          cardTitle
          cardText: _rawCardText
        }
      }
  }

  fragment cardsb on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites{
    ... on SanityCardListB {
        id
        _type
        sectionTitle
        cards {
          cardTitle
          cardText: _rawCardText
        }
      }
  }
  fragment instruction on SanityCardListOrCardListBOrEqualitieBlockOrFooterOrInstructionOrMessengersOrServersOrWebsites{
    ... on SanityInstruction {
        _type
        id
        sectionTitle
        sectionText {
          _type
          _key
          style
          list
          children {
            text
            marks
            _type
            _key
          }
        }
        items {
          instructionTitle
          hasLinks
          _type
          _key
          _id
          instructionText: _rawInstructionText
          links {
            linkBlockTitle
            _type
            _key
            linkItem {
              linkUrl
              linkLabel
              id
            }
          }

        }
        _type
        icon {
          asset {
            gatsbyImageData
            url
            publicUrl
          }
        }
      }
  }
`
