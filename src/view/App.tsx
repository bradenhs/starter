import { observer } from 'mobx-react'
import { Counter } from '~/view'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { style } from '~/utils'
import { Paper, Subheader, Divider } from 'material-ui'

const appClassName = style({
  margin: '50px auto',
  width: '400px',
  maxWidth: 'calc(100% - 20px)'
})

export const App = observer(() => {
  return (
    <MuiThemeProvider>
      <Paper className={appClassName}>
        <Subheader>Counter App</Subheader>
        <Divider />
        <Counter />
      </Paper>
    </MuiThemeProvider>
  )
})
