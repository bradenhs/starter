import { normalize } from 'csstips'
import { style } from 'typestyle'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import { App } from '~/view/App'

// Allows us to capture touch tap events
injectTapEventPlugin()

// Initial CSS setup
normalize()
document.body.className = style({
  fontFamily: 'Roboto, sans-serif'
})

// Create a container the application and render our app into it
const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
ReactDOM.render(<App />, appContainer)
