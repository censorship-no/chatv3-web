import { PortableTextReactComponents } from "@portabletext/react"
import React from "react"

export const defaultComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <>{children}</>,
  types: {
    span: ({ value }) => <span>{value}</span>,
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
