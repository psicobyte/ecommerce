import { PRODUCTS_STATE } from './constants'

export const getIsFetching = state => state[PRODUCTS_STATE].isFetching
export const getProducts = state => state[PRODUCTS_STATE].products
