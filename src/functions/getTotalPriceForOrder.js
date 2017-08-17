import getProductById from './getProductById'

const getTotalPriceForOrder = (data, id) => {
  if (!data || !data.orders || !id) {
    throw new Error('Missing data or id')
  }
  const order = data.orders.find((o) => o.id === id)
  if (!order) {
    return null
  }
  let sum = 0
  return sum
}

export default getTotalPriceForOrder
