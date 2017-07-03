import { observer } from 'mobx-react'
import { RaisedButton } from 'material-ui'

export const IncrementButton = observer(() =>
  <RaisedButton onTouchTap={() => 0} primary>
    Increment
    <div className='hello' />
  </RaisedButton>
)

function hello () {
  console.log('there')
}
