import Categorie from "@/components/Categorie";
import Marquee from "@/components/Marquee";
import { getCategories , getProducts} from "@/lib/api";

const Home = async () => {
  const categories = await getCategories()
  const products = await getProducts()

  return (
    <>
      <Categorie categorie={categories} />
      <Marquee product={products}/>
    </>
  )
}

export default Home
