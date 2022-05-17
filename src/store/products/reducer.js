import {
  PRODUCTS_STATE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './constants'

const initialState = {
  [PRODUCTS_STATE]: {
    error: null,
    isFetching: true,
    products: []
  }
}

const reducer = (state = initialState[PRODUCTS_STATE], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      }

    default:
      return state
  }
}

export default reducer
