import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { SanityImageAsset } from 'sanity-codegen';


export type CompatibleImageType = {
  asset?: SanityImageAsset & { altText?: string | null };
  altText ?: string;
  role ?: string;
  style ?: Record<string, string | number>;
}

export function CompatibleImage(props: CompatibleImageType) {
  if (!props.asset) return null;

  if (props.asset.extension === 'svg') {
    <img src={props.asset.url}
      alt={props.altText ? props.altText : (props.asset.altText || "")}
      role={props.role || "image"}
      style={props.style || {}}
      loading="lazy"
    />
  }
  return (
    <GatsbyImage
      image={props.asset.gatsbyImageData}
      alt={props.altText ? props.altText : (props.asset.altText || "")}
      role={props.role || "image"}
      style={props.style || {}}
    />)
}
