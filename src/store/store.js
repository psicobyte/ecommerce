import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSagas'

const composeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export default composeStore
