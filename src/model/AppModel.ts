import fnx from 'fnx'

export class AppModel extends fnx.Model<AppModel> {
  count = fnx.number

  @fnx.action
  incrementCount? () {
    this.count++
  }
}
