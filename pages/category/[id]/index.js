import { useRouter } from 'next/router'
import Header from '../../../components/header/header'
import fetchProducts from '../../../productFetcher'
import Grid from '../../../components/grid/grid'


const Category = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <Grid products={props.products}></Grid>
    </>
  )
}

export async function getServerSideProps(context) {

  console.log("-----hola-----------", "hola");

  const products = await fetchProducts(context.params.id)

  return {
    props: {
      products: products
    },
  }
}

export default Category
