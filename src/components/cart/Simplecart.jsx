import { connect, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../store/reducers/cart-reducer';
import React from 'react';

// import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SimpleCart = (props) => {

  const { removeItemFromCart } = props;
  let itemsToPurchase = useSelector(state => state.cartReducer.itemsToPurchase)

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          // bgcolor: 'background.paper' 
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader"></ListSubheader>
        }
      >

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>

          <ListItemText
            primary={itemsToPurchase.length} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            props.cart.itemsToPurchase.map((item, index) => (

              <List key={`item-${index}`} component="div" disablePadding>
                <ListItemButton onClick={() => removeItemFromCart(item)} aria-label="delete" sx={{ pl: 4 }}>
                  <ListItemText primary={item.name} />
                  <ListItemIcon >
                    <DeleteOutlineIcon />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            ))

          }
        </Collapse>

      </List>


      {/* <IconButton onClick={() => removeItemFromCart} aria-label="delete">
        <DeleteOutlineIcon />
      </IconButton> */}
    </>
  )
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer,
    quantity: cartReducer.quantityInCart,
  }
}

const mapDispatchToProps = {
  removeItemFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);