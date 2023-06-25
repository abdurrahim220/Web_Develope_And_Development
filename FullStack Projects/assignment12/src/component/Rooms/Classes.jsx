import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSearchParams } from 'react-router-dom'

import Container from '../../pages/Shared/Container/Container'
import Loader from '../../pages/Shared/Loader'
import Heading from './Heading'

const Classes = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')

  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://server-assignment-12-xi.vercel.app/classes')
      .then(res => res.json())
      .then(data => {
        if (category) {
          const filtered = data.filter(classes => classes.category === category)
          console.log(filtered);
          setClasses(filtered)
        } else {
          setClasses(data)
        }

        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [category])

  if (loading) {
    return <Loader />
  }
  return (

    <div>
      {classes && classes.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {classes.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className='pt-12'>
          <Heading
            title='No Classes Available In This Category!'
            subtitle='Please Select Other Categories.'
            center={true}
          />
        </div>
      )}
    </div>
  )
}

export default Classes