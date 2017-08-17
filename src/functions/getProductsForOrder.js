import getProductById from './getProductById'

// const getProductsForOrder = (data, id) => {
//   if (data == null || data.orders == null || id == null) {
//     throw new Error('Missing data or ID')
//   }
//   const productArray = []
//   data.orders.forEach((o) => {
//     if (o.id === id) {
//       o.products.forEach((p) => {
//         productArray.push({
//           id: p,
//           name: getProductById(data, p).name,
//           price: getProductById(data, p).price
//         })
//       })
//     }
//   })
//   if (productArray.length === 0) {
//     return null
//   } else {
//     return productArray
//   }
// }

const getProductsForOrder = (data, id) => {
  if (data == null || data.orders == null || id == null) {
    throw new Error('Missing data or ID')
  }
  const order = data.orders.find((o) => o.id === id)
  if (order === undefined) {
    return null
  }
  const productArray = []
  order.products.forEach((p) => {
    productArray.push(getProductById(data, p))
  })
  return productArray
}

export default getProductsForOrder
