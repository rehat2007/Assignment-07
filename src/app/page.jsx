import Allproducts from "@/components/AllProductPage"
import Banner from "@/components/Hero"
import Pricedown from "@/components/PriceDownPage"
import Priceup from "@/components/PriceUpPage"
import { getProducts } from "@/lib/api"
import Link from 'next/link'

const Home = async () => {
  const products = await getProducts()
  const priceUpProducts = products.filter((item)=>item.change.dir === "up").sort((a , b)=> a.change.pct - b.change.pct).slice(0, 6);
  const priceDownProducts = products.filter((item)=>item.change.dir === "down").sort((a , b)=> a.change.pct - b.change.pct).slice(0, 6);
  
  return (
    <>
      <Banner />
      <Priceup priceUpProduct = {priceUpProducts} />
      <Pricedown priceDownProduct = {priceDownProducts} />
      <Allproducts allProduct = { products} />
    </>
  )
}

export default Home
