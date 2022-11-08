import { connect } from 'react-redux';
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

  // const filteredProducts = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
      {
        props.list.products.map((products, index) => (
          <Card  sx={{ maxWidth: 345 }} key={`products-${index}`}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {products.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${products.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity In Stock: {products.inventory}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" aria-label="add to shopping cart">
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

const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);




