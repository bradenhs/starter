import { normalize } from 'csstips'
import { style } from '~/utils'
import * as ReactDOM from 'react-dom'
import { App } from '~/view'
import * as injectTapEventPlugin from 'react-tap-event-plugin'

if (process.env.NODE_ENV !== 'production') {
  // If in development mode make sure the entire page reloads anytime there is a change. In the
  // future this can be fine-tuned by just having stateful modules reload the entire page.
  const { setStatefulModules } = require('fuse-box/modules/fuse-hmr')
  setStatefulModules(() => true)
}

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
