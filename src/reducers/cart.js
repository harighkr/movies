import initialState from './initialState';
import * as Type from '../constant';

export const cart = (state = initialState.cart, action) => {
    switch (action.type) {
        case Type.GET_DATA:
            return Object.assign(action.movies);
        case Type.UPDATE_CART_DATA:
            return { ...state, item: state.item.concat(action.item) }
        default:
            return state
    }
}