import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
// import { grey } from '@mui/material/colors';

const Header = (props) => {

  // const quantity = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART {props.quantity}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    quantity: cartReducer.quantityInCart,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
