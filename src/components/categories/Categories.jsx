import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import { filterCategory } from '../../store/reducers/product-reducer';
import { connect } from 'react-redux';


const Categories = (props) => {

  const {
    filterCategory,
  } = props;

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => filterCategory('food')}>Food</Button>
        <Button onClick={() => filterCategory('clothing')}>Clothing</Button>
        <Button onClick={() => filterCategory('electronics')}>Electronics</Button>
      </ButtonGroup>
    </>

  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    products: productReducer.products,
    category: productReducer.products.category,
    showProducts: productReducer.showProducts
  }
}

const mapDispatchToProps = {
  filterCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
