import { observable } from 'mobx'
import { TodoDataModel, AppModel } from '~/model'

export class TodoViewModel {
  data: TodoDataModel

  constructor (data: TodoDataModel, private root: AppModel) {
    this.data = observable.shallowObject(data)
  }
}
