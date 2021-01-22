import Header from '../components/header/header'
import { withRouter } from 'next/router'
import { fetchProductDetail } from '../utilities/productFetcher'
import Pin from '../components/pin/pin'


const Product = (obj) => {

    return (
        <>
            <Header />
            <Pin product={obj.product} onPinClick={() => { }}></Pin>
        </>
    )
}



export async function getServerSideProps({ query }) {


    console.log("get server side propds query", query)

    const product = await fetchProductDetail(query.category, query.id, query.variant)
    return {
        props: {
            product: product
        },
    }
}



export default withRouter(Product)