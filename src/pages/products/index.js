import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getIsFetching, getProducts } from '../../store/products/selectors'

import { fetchProductsRequestAction } from '../../store/products/actions'

function Products () {
  const dispatch = useDispatch()

  const isFetching = useSelector(getIsFetching)
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProductsRequestAction())
  }, [])

  if (isFetching) return 'Loading ...'

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.title}
        </div>
      ))}
    </div>
  )
}

export default Products