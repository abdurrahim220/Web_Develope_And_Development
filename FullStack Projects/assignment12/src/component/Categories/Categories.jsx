import React from 'react'

import { categories } from './categoriesData'
import CategoryBox from './CategoryBox'
import { useSearchParams } from 'react-router-dom'
import Container from '../../pages/Shared/Container/Container'
const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  return (
    <div >
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories