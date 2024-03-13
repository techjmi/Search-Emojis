import React from 'react'
import {Box, styled, Typography} from "@mui/material"
import { Emoji } from '../data/data'
const BoxStyle= styled(Box)({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding:"10px"
})
const Home = () => {
  return (
    <>
    <BoxStyle sx={{width:"80%", margin:"auto",mt:"50px"}}>
        <Typography sx={{textAlign:"center", fontWeight:"bold", mb:"10px"}}>See Your Favourite Emoji Here</Typography>
{
    Emoji.map((emoji)=>{
        return<span key={emoji.name} style={{fontSize:"30px", marginRight:"10px"}}>{emoji.emoji}</span>
    })
}
    </BoxStyle>
    </>
  )
}

export default Home