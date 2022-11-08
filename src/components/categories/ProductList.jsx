import { connect } from 'react-redux';


const List = (props) => {
  console.log(props);

  const products = props.list.products.filter(product => product.category === props.list.activeCategory);


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
    list: productReducer
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);