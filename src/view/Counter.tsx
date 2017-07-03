import * as ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import { IncrementButton } from '~/view'
import { style } from '~/utils'

const countClassName = style({
  fontSize: '80px',
  paddingBottom: '20px'
})

const countContainerClassName = style({
  textAlign: 'center',
  padding: '20px'
})

export const Counter = observer(() => {
  return (
    <div className={countContainerClassName}>
      <div className={countClassName}>0</div>
      <IncrementButton />
    </div>
  )
})
