import React from 'react'

const Categorie = ({categorie}) => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-6 overflow-x-auto py-3 sm:gap-8 md:gap-10 lg:gap-12">
          {categorie.map((item) => (<button key={item.id} className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-gray-700 transition-colors duration-200 hover:text-green-600 sm:text-sm" >
            <span className="text-sm sm:text-base"> {item.icon} </span> <span>{item.nameBn}</span> </button>))}
        </div>
      </div>
    </nav>
  )
}

export default Categorie