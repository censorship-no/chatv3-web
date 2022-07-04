/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "@popperjs/core/dist/umd/popper.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

import "./src/models/init"

import { fork } from 'effector'
import { Provider } from 'effector-react/scope'
import React from "react"


const scope = fork()

export function wrapRootElement({ element }: {element: JSX.Element}) {
  return (
    <Provider value={scope}>
      {element}
    </Provider>
  )
}