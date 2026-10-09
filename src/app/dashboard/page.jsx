import Allproducts from '@/components/AllProductPage'
import { getProducts } from '@/lib/api'
import React from 'react'

const page = async () => {
    const products = await getProducts()
  return (
    <>
    <Allproducts  allProduct = { products}/>
    </>
  )
}

export default page