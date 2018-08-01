import ajax from './ajax'

export const reqAddress = (geohash) => ajax('/api/position/' + geohash)

export const reqCategorys = () => ajax('/api/index_category')

export const reqShops = ({latitude, longitude}) => ajax('/api/shops',{latitude, longitude})
