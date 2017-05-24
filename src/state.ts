import { AppModel } from '~/model'
import { logger } from '~/utils'

export const state = new AppModel({
  count: 0
})

if (process.env.NODE_ENV !== 'production') {
  state.use(logger)
}
