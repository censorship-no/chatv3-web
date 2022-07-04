import { PortableTextReactComponents } from "@portabletext/react"
import React from "react"

export const elementaryComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <>{children}</>,
  types: {
    span: ({ value }) => <span>{value}</span>,
  },

  marks: {
    strong: ({ text }) => {
      return <span className="highlight">{text}</span>
    },
  },
}
