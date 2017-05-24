import { Next, ActionInfo } from 'fnx/lib/core/middleware'

/**
 * Logger middleware to display actions in the console
 */
export function logger (next: Next, action: ActionInfo) {
  const msg = `%cAction%c${[ '[root]', ...action.path ].join('.')}`
  const titleStyle = `background: #f06; padding: 1px 4px; border-radius: 4px 0px 0px 4px; color: #eee;`
  const pathStyle = `color: #333;  padding: 1px 4px; background: #eee; border-radius: 0px 4px 4px 0px;`

  console.log(msg, titleStyle, pathStyle)
  if (action.args.length > 0) {
    console.log('Args', action.args)
  }

  next()
}
