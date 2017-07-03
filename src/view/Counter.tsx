import * as ReactDOM from 'react-dom'
import ReactiveComponent from 'fnx/react'
import { state } from '~/state'
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

export const Counter = ReactiveComponent(() => {
  return (
    <div className={countContainerClassName}>
      <div className={countClassName}>
        {state.count}
      </div>
      <IncrementButton />
    </div>
  )
})
