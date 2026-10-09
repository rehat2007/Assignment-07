import React from 'react'

const Dropdown = () => {
  return (
        <nav className="flex gap-8 bg-gray-900 p-4 text-white">
      <div className="relative group">
        {/* Dropdown trigger */}
        <button className="flex items-center gap-2">
          Products
          <span>⌄</span>
        </button>

        {/* Dropdown menu */}
        <div className="absolute left-0 top-full z-50 hidden
                        w-48 rounded-lg bg-white p-2 text-gray-800
                        shadow-lg group-hover:block">
          <a href="/products"
             className="block rounded px-4 py-2 hover:bg-gray-100">
            All Products
          </a>

          <a href="/categories"
             className="block rounded px-4 py-2 hover:bg-gray-100">
            Categories
          </a>

          <a href="/popular"
             className="block rounded px-4 py-2 hover:bg-gray-100">
            Popular Products
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Dropdown