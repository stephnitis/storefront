import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SimpleCart from '../cart/Simplecart';


const Header = (props) => {



  return (
    <>
      <Box 
      width="80%"
      alignItems="center"
      >
        <AppBar position="static">
          <Toolbar>
          <Typography 
          variant="h3" 
          minHeight="5vw"
          alignItems="center"
          sx={{ 
            verticalAlign: "middle",
            flexGrow: 1 }}
          >
            OUR STORE
          </Typography>

          <SimpleCart />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}



export default Header;
