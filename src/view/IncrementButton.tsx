import ReactiveComponent from 'fnx/react'
import { counter } from '~/controller'
import { state } from '~/state'
import { RaisedButton } from 'material-ui'

export const IncrementButton = ReactiveComponent(() => {
  return <RaisedButton
    onTouchTap={ () => counter.increment(state) }
    primary
  >
    Increment
  </RaisedButton>
})
