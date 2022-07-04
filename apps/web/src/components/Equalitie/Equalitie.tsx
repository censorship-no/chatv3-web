import { LinkInfo } from '../../../typings/schema';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { SanityImageAsset, SanityImageCrop, SanityImageHotspot } from 'sanity-codegen/types';

type EqualitieProps = {

  _type: "equalitieBlock",
  title?: string;
  hasLinksSection?: boolean;
  text?: string;
  logo?: {
    asset: SanityImageAsset & { altText?: string | null, }
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
  links?: LinkInfo[];
  _id: string;

}

export function Equalitie(props: EqualitieProps) {

  return (
    <div className="green-alert">
      {!!props.logo ? (<GatsbyImage
        image={props.logo.asset.gatsbyImageData}
        alt={props.logo.asset.altText || ""}
        className="card-item-logo"
      />) : 'dcomms'}
      <div className="green-alert-heading">
        {props.title}
      </div>
      <div>

        <p className="green-alert-text">
          {props.text}
        </p>
        {props.hasLinksSection && (<ul className="btn-list">
          {props.links?.map(item => (
            <li key={item.linkUrl}>
              <a href={item.linkUrl} target="_blank" className="btn" rel="noreferrer">
                {item.linkLabel}
              </a>
            </li>
          ))}
        </ul>)}
      </div>

    </div>
  )
}
