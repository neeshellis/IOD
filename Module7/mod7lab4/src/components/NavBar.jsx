// import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'


// export default function NavBar() {

//  return (
//  <nav className="NavBar">
//  <ul className="menu">
//  <li><NavLink to="/black">HomePage</NavLink></li>
//  <li><NavLink to="/red">LoginPage</NavLink></li>
//  <li><NavLink to="/green">BitcoinPage</NavLink></li>
//  </ul> {/* ++ Add another page with route and component */}
//  </nav>
//  )
// }
// Save as components/NavBar.jsx and render in App.jsx
// ABOVE <AppRoutes />

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p>Module 7 App</p>
          </Typography>
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/black"
            sx={{ textTransform: 'none' }}
          >
            HomePage
          </Button>
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/red"
            sx={{ textTransform: 'none' }}
          >
            LoginPage
          </Button>
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/green"
            sx={{ textTransform: 'none' }}
          >
            BitcoinPage
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}