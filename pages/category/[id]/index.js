import Header from '../../../components/header/header'
import { fetchProducts } from '../../../utilities/productFetcher'
import Grid from '../../../components/grid/grid'
import { connect } from "react-redux";

const Category = ({ products, category, dispatch }) => {

  const addNewLike = (pin) => dispatch({ type: 'ADD_NEW_LIKE', newLike: pin });




  return (
    <>
      <Header />
      <Grid
        products={products}
        onPinClick={addNewLike}
        category={category}
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