import NavBar from '../../../components/navbar/navbar'
import { fetchProducts } from '../../../utilities/productFetcher'
import Grid from '../../../components/grid/grid'
import Pin from '../../../components/pin/pin'

const Category = ({ products, category }) => {





  return (
    <>
      <NavBar />
      <Grid
        products={products}
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

export default Category;