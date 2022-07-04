/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import "./src/models/init"

import { fork } from 'effector'
import { Provider } from 'effector-react/scope'
import React from "react"


const scope = fork()

export function wrapRootElement({ element }: { element: JSX.Element }) {
  return (
    <Provider value={scope}>
      {element}
    </Provider>
  )
}