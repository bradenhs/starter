import { observer } from 'mobx-react'
import { counter } from '~/controller'
import { state } from '~/state'
import { RaisedButton } from 'material-ui'

export const IncrementButton = observer(() =>
  <RaisedButton onTouchTap={() => counter.increment(state)} primary>
    Increment
    <div className='hello' />
  </RaisedButton>
)

function hello () {
  console.log('there')
}
