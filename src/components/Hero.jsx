import { Box,Typography } from '@mui/material'
import React from 'react'

const Hero = ({hero_img}) => {
  return (
    <Box className='section'>
        <img src={hero_img} alt="hero--img" className='hero--img' />
        <Typography variant='h3' className='hero--header'>
        Online Expereriences
        </Typography>
        <Typography variant='h6' className='hero--text' >
            Join unique interactive activiies led by one-of-a-kind hosts-all without leaving home
        </Typography>

        <h2 className='popular'>Popular Hotels</h2>
    </Box>
  )
}

export default Hero
