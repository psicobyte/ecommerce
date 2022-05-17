import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import composeStore from '../store/store'

const store = composeStore()

const App = ({ Component, pageProps, err }) => (
  <Provider store={store}>
    <Component {...pageProps} err={err} />
  </Provider>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  err: PropTypes.object
}

export default App
