import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss'


const drawerWidth = 240;
const windows = window;

// const navItems = ['HOME', 'RESIDENTIAL', 'COMMERCIAL', 'REQUEST AN ESTIMATE', 'ABOUT', 'CONTACT'];
const navItems = ['HOME', 'RESIDENTIAL', 'COMMERCIAL', 'REQUEST AN ESTIMATE', 'ABOUT'];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [width, setWidth] = React.useState(windows.innerWidth);

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    windows.addEventListener("resize", () => setWidth(windows.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function convertToFirstLetterCap(word) {
    // Convert the word to lowercase
    var lowercaseWord = word.toLowerCase();

    // Extract the first letter and capitalize it
    var firstLetter = lowercaseWord.charAt(0).toUpperCase();

    // Extract the rest of the word
    var restOfWord = lowercaseWord.slice(1);

    // Concatenate the first letter and the rest of the word
    var result = firstLetter + restOfWord;

    return result;
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#396195', height: '100%' }}>
      <br></br>
      <List sx={{ marginLeft: '5%' }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item}`} style={{ textDecoration: 'none', color: 'white' }}>
                {convertToFirstLetterCap(item)}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();
  console.log("PATH:" + location.pathname);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" color='transparent' sx={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', height: { xs: '20vw', md: '120px' }, width: '100%', boxShadow: 'none', backgroundColor: '#396195' }}>
          <Toolbar sx={{ width: '90%' }}>

            <Link to={`/`} style={{ textDecoration: 'none', color: (location.pathname === '/HOME' || location.pathname === '/') ? '#fff' : '#fff', fontSize: '13.5px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>

                {width > 480 ?
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box component="img" src={require('../../images/jericho_logo.png')} sx={{ width: '5vw', height: '7vw', }} />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ width: '14vw', color: '#e7d49e', marginLeft: '-1vw', fontSize: '1.4vw' }}
                      fontFamily={'higuen'}
                    >
                      Jericho Foundation LLC
                    </Typography>
                  </div>
                  :
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '-3vw' }}>
                    <Box component="img" src={require('../../images/jericho_logo.png')} sx={{ width: '15vw', height: '21vw', }} />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ width: '30vw', color: '#e7d49e', marginLeft: '-1vw', fontSize: '4vw', textAlign: 'left' }}
                      fontFamily={'higuen'}
                    >
                      Jericho Foundation LLC
                    </Typography>
                  </div>
                }

              </Box>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', width: '95%', justifyContent: 'space-evenly', marginLeft: '5%' }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', ':hover': { color: '#e7d49e' } }}>
                  <Link to={`/${item}`} style={{ textDecoration: 'none', color: (location.pathname === '/HOME' || location.pathname === '/') ? '#fff' : '#fff', fontSize: '0.9vw', fontFamily: 'Inter-Light' }}>
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: '35%', display: { md: 'none' } }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle} x
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;