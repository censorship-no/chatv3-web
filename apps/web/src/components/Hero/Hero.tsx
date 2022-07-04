import React from "react"
import {
  PortableText,
} from "@portabletext/react"

import { HeroTitleText, SanityBlock } from "../../../typings/schema"
import { defaultComponents, elementaryComponents } from "../serializers"

type HeroProps = {
  title: string | HeroTitleText
  text: string | HeroTitleText
}



export function Hero({ title, text }: HeroProps) {
  return (
    <div className="top-block">
      <div className="top-text">
        <h1 className="main-heading">
          <PortableText value={title as (SanityBlock & { _key: string; }) | (SanityBlock & { _key: string; })[]} components={elementaryComponents} />
        </h1>
        <PortableText value={text as (SanityBlock & { _key: string; }) | (SanityBlock & { _key: string; })[]} components={defaultComponents}/>
      </div>
    </div>
  )
}
