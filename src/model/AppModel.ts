import { TodoCollection } from '~/model'

export class AppModel {
  todoCollection = new TodoCollection(this)
}
