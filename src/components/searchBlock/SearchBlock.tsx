import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {TextField, Typography, Box} from '@mui/material';
import style from "./SearchBlock.module.css";

interface Props{
  setSearch:React.Dispatch<React.SetStateAction<string>>
}

export function SearchBlock({setSearch}:Props){
  return (
    <Box sx={{position: "relative", mb: "40px", pt: "50px"}}>
        <Typography sx={{mb:"10px", fontWeight:"700"}}>Filter by keywords</Typography>
        <SearchIcon sx={{position:`absolute`, top:`100px`, left:`15px`, color:"#575757"}}/>
        <TextField sx={{'& .MuiInputBase-root':{
            '& .MuiInputBase-input':{
              paddingLeft:'60px',
              color:"#575757",
              fontSize:"16px",
              lineHeight:"24px",
              maxHeight:"50px"
            }
          },
          boxShadow:'0px 8px 24px rgba(0, 0, 0, 0.05)', minWidth:'600px'}} 
        placeholder="The most successful IT companies in 2020" variant='outlined' onChange={(e)=>{
        setSearch(e.target.value)}}/>
    </Box>
  )
}
