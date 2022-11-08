import { connect } from 'react-redux';
import { addItemToCart } from '../../store/reducers/cart-reducer';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Stack from '@mui/material/Stack';

const List = (props) => {
  console.log(props);

  return (
    <>
      {
        props.list.products.map((product, index) => (
          <Card  sx={{ maxWidth: 345 }} key={`product-${index}`}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity In Stock: {product.inventory}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1}>
                <IconButton 
                onClick={() => props.addItemToCart(product.name)}
                color="primary" 
                aria-label="add to shopping cart"
                >
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteOutlineIcon />
                </IconButton>
              </Stack>
            </CardActions>

          </Card>
        ))
      }
    </>
  )
}

const mapStateToProps = ({ productReducer, cartReducer }) => {
  return {
    list: productReducer,
    cart: cartReducer,
    // quantityInCart: cartReducer.quantityInCart,
    // itemsToPurchase: cartReducer.itemsToPurchase
  }
}

const mapDispatchToProps = {
  addItemToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);




