import { AppModel } from '~/model'

describe('AppModel', () => {
  it('should increment properly when the incrementCount action is applied', () => {
    const state = new AppModel({ count: 0 })

    state.incrementCount()

    const actual = state.count
    const expected = 1

    expect(actual).toBe(expected)
  })
})
