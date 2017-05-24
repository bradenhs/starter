import { AppModel } from '~/model'
import { logger } from '~/utils'

export const state = new AppModel({
  count: 0
})

if (MODE === 'development') {
  state.use(logger)
}
