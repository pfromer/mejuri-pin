import Header from '../../../components/header/header'
import fetchProducts from '../../../productFetcher'
import Grid from '../../../components/grid/grid'
import { connect } from "react-redux";

const Category = ({ products, dispatch }) => {

  const addNewLike = (pin) => dispatch({ type: 'ADD_NEW_LIKE', newLike: pin });

  return (
    <>
      <Header />
      <Grid
        products={products}
        onPinClick={addNewLike}
      ></Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetchProducts(context.params.id)

  return {
    props: {
      products: products
    },
  }
}

export default connect((state) => state)(Category);