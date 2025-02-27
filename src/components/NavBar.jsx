import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{ backgroundColor: "#004d40" }}> {/* Dark Green */}
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Blog Dashboard
      </Typography>
      <Button 
        color="inherit" 
        component={Link} 
        to="/h" 
        startIcon={<HomeIcon />} 
        sx={{ color: "#a5d6a7" }} // Light Green
      >
        Home
      </Button>
      <Button 
        color="inherit" 
        component={Link} 
        to="/a" 
        startIcon={<AddIcon />} 
        sx={{ color: "#a5d6a7" }} // Light Green
      >
        Add Post
      </Button>
    </Toolbar>
  </AppBar>
</Box>
    </div>
  )
}

export default NavBar
