import { connect } from 'react-redux';
import { filterElectronics } from '../../store/reducers/productsList';

const Details = (props) => {

  const { productsList, 
    filterElectronics,
    category,
    products,
  } = props;

  return(
    <>
    
    <button onClick={() => filterElectronics(category)}>Electronics</button>
    {/* <h1>All Products {products.category}</h1> */}
    {
      products.map((products, index) => (
        <div key={`products-${index}`}>
          
          <ul>
            <li>{products.name}</li>
            <li>{products.price}</li>
            <li>{products.inventory}</li>
          </ul>
        </div>
      ))
    }
    </>
  )
}

const mapStateToProps = ({productsList}) => {
  return {
    products: productsList.products,
    category: productsList.activeCategory
  }
}

const mapDispatchToProps = {
  filterElectronics,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)