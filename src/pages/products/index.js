import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getIsFetching, getProducts } from '../../store/products/selectors'
import { fetchProductsRequestAction } from '../../store/products/actions'

const ListWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: 800px;
  margin: 0 auto;
`

const ProductInfoContainer = styled.div`
  padding: 20px;
`

const ProductCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
`

const ImageWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 100% 0 0 0;
  position: relative;
  width: 100%;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

function Products () {
  const dispatch = useDispatch()

  const isFetching = useSelector(getIsFetching)
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProductsRequestAction())
  }, [])

  if (isFetching) return 'Loading ...'

  return (
    <ListWrapper>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ImageWrapper>
            <Image src={product.image} />
          </ImageWrapper>
          <ProductInfoContainer>
            <h4>
              {product.title}
            </h4>
          </ProductInfoContainer>
        </ProductCard>
      ))}
    </ListWrapper>
  )
}

export default Products
