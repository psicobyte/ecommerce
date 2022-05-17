import { all, takeLatest } from 'redux-saga/effects'

import { FETCH_PRODUCTS_REQUEST } from './products/constants'
import { fetchProductsSaga } from '../store/products/saga'

export default function * rootSaga () {
  yield all([
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga)
  ])
}
