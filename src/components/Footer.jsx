import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./navbar.css"
const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer--left">
        <Typography variant='h6'>
            © 2023 Airbnb, Inc
        </Typography>    
        <ul className='footer--list'>
        <li className="footer--link"><a href="#">Privacy</a></li>
        <li className="footer--link"><a href="#">Terms</a></li>
        <li className="footer--link"><a href="#">Sitemap</a></li>
        <li className="footer--link"><a href="#">Company Details</a></li>
        <li className="footer--link"><a href="#">Destinations</a></li>
        </ul>       
      </Box>
      <Box className="footer--right">
        <ul className='footer--list'>
            <li className="footer--link"><a href="#">English(IN)</a></li>
            <li className="footer--link"><a href="#">INR</a></li>
            <li className="footer--link"><a href="#">Support & Resources</a></li>
        </ul>
      </Box>
    </Box>
  )
}

export default Footer
