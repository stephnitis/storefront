import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Header = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header;
