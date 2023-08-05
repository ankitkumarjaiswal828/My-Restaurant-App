import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
        <Box sx={{my:3,'& svg':{
            fontSize:'60px',
            cursor:'pointer',
            mr:2,
        },
        '& svg:hover':{
            color:'goldenrod',
            transform:'translate(5px)',
            transition:'all 400ms'
        }}}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
        </Box>
       <Typography variant='h5' sx={{'@media (max-width:600px)':{
        fontSize:'1rem',
       }}}>
        All Rights Reserved &copy; Ankit kumar</Typography> 
    </Box>
    </>
  )
}
