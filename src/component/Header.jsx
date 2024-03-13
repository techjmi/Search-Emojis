import React from 'react'
import {Box, AppBar, Toolbar, List, ListItem} from "@mui/material"
// import Search from './Search'
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Emoji } from '../data/data';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));
//styling css
const ListWrapper = styled(List)({
    display:"flex",
    width:"50.5%",
    textAlign:"center",
    position: "absolute",
    left:"31.8%",
    borderRadius:"5px",
    backgroundColor: "#FEEBEB",
    color: "#333333",
    marginTop: "7rem",
    display:"flex",
    // margin:"auto",
    flexDirection:"column",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  });
const BoxStyle= styled(Box)({
    // margin:"1px 0"
})

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredEmojis = Emoji.filter(emoji =>
      emoji.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3)
console.log(filteredEmojis)
  return (
    <>
    <AppBar position='sticky'>
<Toolbar sx={{textAlign:"center", margin:"auto"}}>
<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search among 300+ emoji..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
  
          <ListWrapper>
  {searchQuery && filteredEmojis.length === 0 && <p>No Emoji Found</p>}
  {filteredEmojis.map(emoji => (
    <BoxStyle key={emoji.name}>{emoji.emoji}</BoxStyle>
  ))}
</ListWrapper>

</Toolbar>
    </AppBar>
    </>
  )
}

export default Header