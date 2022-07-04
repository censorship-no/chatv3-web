import { PortableTextReactComponents } from "@portabletext/react"
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import React from "react"
import { Code } from '../Code'

const imageUrl = urlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || "",
  dataset: process.env.GATSBY_SANITY_DATASET || ""
})


export const instructionComponents: Partial<PortableTextReactComponents> = {
  block: {
    h4: ({ children }) => <h4 className="card-item-text-heading">{children}</h4>,
    blockquote: ({ children }) => <blockquote >{children}</blockquote>,
  },
  unknownBlockStyle: ({ children }) => <>{children}</>,
  types: {
    span: ({ value }) => <span>{value}</span>,
    code: Code,
    image: ({ value, isInline }) => {
      try {
        const { width, height } = getImageDimensions(value)
        const imageURL = imageUrl
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()

        return (
          <img
            src={imageURL}
            alt={value.alt || " "}
            loading="lazy"
            style={{
              // Display alongside text if image appears inside a block text span
              display: isInline ? "inline-block" : "block",
              maxHeight: "500px",

              // Avoid jumping around with aspect-ratio CSS property
              aspectRatio: `${width / height}`,
            }}
          />
        )
      } catch (err) {
        return null
      }
    },
  },

  marks: {
    link: ({ value, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = value
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
    strong: ({ text }) => {
      return <strong className="highlight">{text}</strong>
    },
  },
}
