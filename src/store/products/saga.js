import { call, put } from 'redux-saga/effects'

import { fetchProductsFailureActions, fetchProductsSuccessActions } from './actions'

const fetchProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => data)
}

export function * fetchProductsSaga (action) {
  try {
    const response = yield call(fetchProducts, { data: action.payload })

    yield put(fetchProductsSuccessActions(response))
  } catch (error) {
    yield put(fetchProductsFailureActions({ error: error.message }))
    throw Error(error)
  }
}
