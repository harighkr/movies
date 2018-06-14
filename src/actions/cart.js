
import * as Type from '../constant';
import { movies } from '../data/movies'

export const getData = item => dispatch => dispatch({ type: Type.GET_DATA, movies })
export const removeFromMyList = index => (dispatch, getState) => {
    const cart = getState().cart;
    const recommendations = cart.recommendations.concat(cart.mylist[index]);
    const mylist = cart.mylist.filter((i, k) => k !== index);

    dispatch({ type: Type.GET_DATA, movies: { mylist, recommendations } })
}
export const addToMyList = index => (dispatch, getState) => {
    const cart = getState().cart;
    const mylist = cart.mylist.concat(cart.recommendations[index]);
    const recommendations = cart.recommendations.filter((i, k) => k !== index);

    dispatch({ type: Type.GET_DATA, movies: { mylist, recommendations } })
}

export const updateCart = item => dispatch => dispatch({ type: Type.UPDATE_CART_DATA, item })
