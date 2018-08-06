export default {

  ratingsTotalCount(state) {
    return state.ratings.length;
  },
  ratingsPositiveCount(state) {
    return state.ratings.reduce((preCount, rating) => preCount + (rating.rateType === 0 ? 1 : 0), 0)
  },
  cartFoodCount(state){
    return state.cartFoods.reduce((preCount,food) => preCount + food.count,0)
  },
  cartFoodPrice(state){
    return state.cartFoods.reduce((preCount,food) => preCount + food.count * food.price,0)
  }
}
