/* global describe, expect, it */
import DATA from '../DATA'
import getTotalPriceForOrder from './getTotalPriceForOrder'

describe('getTotalPriceForOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof getTotalPriceForOrder).toBe('function')
  )

  it(
    'throws with no data',
    () =>
      expect(() => getTotalPriceForOrder(null, 1)).toThrow()
  )

  it(
    'throws with undefined orders',
    () =>
      expect(() => getTotalPriceForOrder({}, 1)).toThrow()
  )

  it(
    'throws with no id',
    () =>
      expect(() => getTotalPriceForOrder(DATA, undefined)).toThrow()
  )

  it(
    'returns null if the order is not found',
    () =>
      expect(getTotalPriceForOrder(DATA, 100)).toBeNull()
  )

  it(
    'returns a number',
    () =>
      expect(getTotalPriceForOrder(DATA, 1).toBeInstanceOf(Number))
  )
})
