import { connect } from 'react-redux';


const List = (props) => {

  const {
    products,
  } = props;


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
    products: productReducer.products,
    category: productReducer.products.category,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);