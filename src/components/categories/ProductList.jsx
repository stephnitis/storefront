import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addItemToCart } from '../../store/reducers/cart-reducer';
import { getProducts } from '../../store/reducers/product-reducer';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const List = (props) => {
  console.log(props);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const { addItemToCart } = props;

  return (
    <>
      <Box
        display="flex"
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
        maxWidth="90vh"
        minHeight="20vh"
        direction="column"

      // sx={{ flexGrow: 1 }}
      >
        <Grid
          container spacing={{ xs: 2, md: 3 }}
          maxWidth="90%"
          alignSelf="center"
          alignItems="center"
          justifyContent="center"
          style={{ maxHeight: '200vh' }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            justifyContent: "center",
          }}
        >
          {
            props.list.map((product, index) => (
              <Grid
                sx={{
                  justifyContent: "center",
                }}
                item xs={4} sm={4} md={3}
                key={index}>
                <Card
                sx={{
                  height: '20vh'
                }}
                key={`product-${index}`}>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity In Stock: {product.inStock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        onClick={() => addItemToCart(product)}
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <ShoppingCartIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <InfoIcon />
                      </IconButton>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

const mapStateToProps = ({ productReducer, cartReducer }) => {
  return {
    list: productReducer.products,
    cart: cartReducer,
  }
}

const mapDispatchToProps = {
  addItemToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

