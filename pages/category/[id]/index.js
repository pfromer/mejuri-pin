import Header from '../../../components/header/header'
import { fetchProducts } from '../../../utilities/productFetcher'
import Grid from '../../../components/grid/grid'
import { connect } from "react-redux";
import Pin from '../../../components/pin/pin'

const Category = ({ products, category, dispatch }) => {

  const addNewLike = (pin) => dispatch({ type: 'ADD_NEW_LIKE', newLike: pin });




  return (
    <>
      <Header />
      <Grid
        products={products}
        onChildClick={addNewLike}
        category={category}
        childType={Pin}
      ></Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetchProducts(context.params.id)

  return {
    props: {
      products: products,
      category: context.params.id
    },
  }
}

export default connect((state) => state)(Category);