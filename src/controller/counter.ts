import { AppModel } from '~/model'

export const counter = {
  increment (state: AppModel) {
    state.incrementCount()
  }
}
