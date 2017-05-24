import * as React from 'react'
import ReactiveComponent from 'fnx/react'
import { Counter } from '~/view'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { style } from 'typestyle'
import { Paper, Subheader, Divider } from 'material-ui'

const appClassName = style({
  margin: '50px auto',
  width: '400px',
  maxWidth: 'calc(100% - 20px)'
})

export const App = ReactiveComponent(() => {
  return <MuiThemeProvider>
    <Paper className={ appClassName }>
      <Subheader>Counter App</Subheader>
      <Divider/>
      <Counter/>
    </Paper>
  </MuiThemeProvider>
})
