import { getProductsByCategory } from "@/lib/api";
import Categorypage from "./categorypage";


const categoryPage = async ({ params }) => {
 
    const {category} = await params
    const products = await getProductsByCategory(category)
  return (
    <>
        <Categorypage category = {products}/>
    </>
  )
}

export default categoryPage