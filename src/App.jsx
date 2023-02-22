import React from 'react'
import {Box} from "@mui/material"
import data from "./utils/data.js"
import Card from './components/Card'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero.jsx"
import hero_img from "./images/hero_img.png"
import "./components/navbar.css"
import nav_logo from "./images/airbnb.svg"
import Footer from './components/Footer.jsx'
import "../src/components/navbar.css"

const App = () => {
  const cards = data.map(item=>{
    return( <Card
        key={item.id}
        card_img={item.card_img}
        star={item.star}
        rating={item.rating}
        place={item.place}
        name={item.name}
        price={item.price}

    />)
});
  return (
    <Box>
      <Navbar nav_logo={nav_logo}/>
      <Hero hero_img={hero_img}/>
      <div className='cards'>{cards}</div>
      <Footer/>
    </Box>
  )
}

export default App
