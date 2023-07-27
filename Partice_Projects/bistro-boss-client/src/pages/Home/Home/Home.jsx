import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../../Category/Category'
import PopularMenu from '../../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testomonial from '../Testomonial/Testomonial'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Bistro boss || Home</title>
        
      </Helmet>
    <Banner/>
    <Category/>
    <PopularMenu/>
    <Featured/>
    <Testomonial/>
    </>
    
  )
}

export default Home