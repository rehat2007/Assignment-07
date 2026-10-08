import React from 'react'
import Navbar from './Navbar'
import { getCategories, getProducts } from '@/lib/api'
import Categorie from './Categorie'
import Marquee from './Marquee'


const Header = async () => {
    const categories = await getCategories()
    const products = await getProducts()
    return (
        <div className="sticky top-0  z-50 bg-white">
            <Navbar />
            <Categorie categorie={categories} />
            <Marquee product={products} />
        </div>
    )
}

export default Header