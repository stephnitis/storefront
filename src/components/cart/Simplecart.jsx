import { connect } from 'react-redux';
import { removeItemFromCart } from '../../store/reducers/cart-reducer';
import React from 'react';

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

  const { removeItemFromCart, quantity } = props;

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
          color: 'secondary.light'
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{
              color: 'secondary.light'
            }}
            component="div"
            id="nested-list-subheader">
          </ListSubheader>
        }
      >

        <ListItemButton
          onClick={handleClick}
          sx={{
            color: 'secondary.light'
          }}
        >
          <ListItemIcon
            sx={{
              color: 'secondary.light'
            }}>
            <ShoppingCartIcon />
          </ListItemIcon>

          <ListItemText
            sx={{
              color: 'secondary.light'
            }}
            primary={quantity} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            props.cart.itemsToPurchase.map((item, index) => (

              <List key={`item-${index}`} component="div" disablePadding>
                <ListItemButton
                  onClick={() => removeItemFromCart(item)}
                  aria-label="delete"
                  sx={{
                    color: 'secondary.light',
                    pl: 4
                  }}>
                  <ListItemText
                    sx={{
                      color: 'secondary.light'
                    }}
                    primary={item.name} 
                  />
                  <ListItemText
                    sx={{
                      color: 'secondary.light'
                    }}
                    primary={item.qty}
                  />
                  <ListItemIcon
                    sx={{
                      color: 'secondary.light'
                    }} >
                    <DeleteOutlineIcon />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            ))

          }
        </Collapse>
      </List>

    </>
  )
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer,
    quantity: cartReducer.totalItems,
  }
}

const mapDispatchToProps = {
  removeItemFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);