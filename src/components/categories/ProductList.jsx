import { connect } from 'react-redux';


const List = (props) => {
  console.log(props);

  const products = props.products.products.filter(product => product.category === props.products.activeCategory);


  return (
    <>
        <section >
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
        </section>
    </>
  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    products: productReducer
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);