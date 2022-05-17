import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './constants'

export const fetchProductsRequestAction = () => ({
  type: FETCH_PRODUCTS_REQUEST
})

export const fetchProductsSuccessActions = (payload) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
})

export const fetchProductsFailureActions = (payload) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload
})
