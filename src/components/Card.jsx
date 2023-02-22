import { Typography } from '@mui/material'
import React from 'react';
import { Box } from '@mui/system';
import "./navbar.css"

const Card = ({key,card_img,star,rating,place,name,price}) => { 
// const img = card_img;
// const address = "../images/" 


// const logo = address + img 
  return (
    <Box className="card">
     
        <img key={key} src={card_img} alt="card--img" className='card--img' />
        { (price >= 1000) ||(rating>4.5) ? <Typography variant='h6' className='card--premium'>Premium</Typography> : <></>}
       <Box className="card--details">
       <Typography variant='h6' className='card-place'>{place}</Typography>
        <Typography variant='h6' className='card--rating'>
                <img src={star} alt="card--star" className='card--star' />{rating}
        </Typography>
       </Box>
        <Typography variant='p' className='card--name'>
           897 kilometres away <br /> {name}
        </Typography>
        <Typography variant='p' className='card--name'>
        $ <span className="card--price">{price}</span> &nbsp;night
        </Typography>
    </Box>
  )
}

export default Card
