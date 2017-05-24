import { normalize } from 'csstips'
import { cssRaw } from 'typestyle'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '~/view'
import * as injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
normalize()
cssRaw(`
  body {
    background: #eee;
    fontFamily: Roboto;
  }
`)

const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
ReactDOM.render(<App/>, appContainer)
