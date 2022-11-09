import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const Header = () => {
  // employ the useSelector hook from react-redux
  // takes a callback, that is state, and grab the state that you want
  let productsInCart = useSelector(state => state.cart.productsInCart)

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART({productsInCart.length})</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header;
