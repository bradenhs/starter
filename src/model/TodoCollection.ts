import { observable } from 'mobx'
import { TodoViewModel, AppModel } from '~/model'

export class TodoCollection {
  todosById = observable.shallowMap<TodoViewModel>()

  constructor (private root: AppModel) {}
}
