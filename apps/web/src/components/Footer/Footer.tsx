import React from 'react'
import { PortableText } from "@portabletext/react";
import { CompatibleImage } from '../CompatibleImage';
import {
  Footer as FooterType,
} from "../../../typings/schema"
import { defaultComponents } from '../serializers';

export function Footer(props: FooterType) {
  return (
    <footer>
      <div className="equalitie-desc">
        <CompatibleImage
          asset={props.logo?.asset}
          altText={props.logoAltText || ""}
          style={{ width: "240px" }}
        />
        <br />
        {!!props.footerTagline && (<p><PortableText value={props.footerTagline} components={defaultComponents} /></p>)}
      </div>
      <div className="license-desc">
        {!!props.footerLicenseInfo && (<p><PortableText value={props.footerLicenseInfo} components={defaultComponents} /></p>)}
      </div>
    </footer>
  )
}
