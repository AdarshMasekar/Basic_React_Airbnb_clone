import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./navbar.css"
import {footerlinksleft, footerlinksright} from "../utils/footerlinks"
const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer--left">
        <Typography variant='h6'>
            © 2023 Airbnb, Inc
        </Typography>    
        <ul className='footer--list'>
          {footerlinksleft.map(item=>(

        <li className="footer--link"><a href={item.url}>{item.path}</a></li>
        ))}
        </ul>       
      </Box>
      <Box className="footer--right">
        <ul className='footer--list'>
        {footerlinksright.map(item=>(

<li className="footer--link"><a href={item.url}>{item.path}</a></li>
))} </ul>
      </Box>
    </Box>
  )
}

export default Footer
