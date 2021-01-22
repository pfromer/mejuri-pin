import Header from '../components/header/header'
import { withRouter } from 'next/router'
import { fetchProductDetail } from '../utilities/productFetcher'
import Pin from '../components/pin/pin'
import Grid from '../components/grid/grid'

const Product = ({ props }) => {

    return (
        <>
            <Header />
            <Pin product={props.product} onPinClick={() => { }}></Pin>
            <Grid
                products={props.otherVariants}
                onPinClick={() => { }}
                category={props.category}
            ></Grid>
        </>
    )
}



Product.getInitialProps = async ({ query }) => {

    const product = await fetchProductDetail(query.category, query.id, query.variant)
    const otherVariants = product.otherImages.map(function (image, index) {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: image,
            variant: index,
            category: query.category
        }
    }).filter(p => p.variant != query.variant)

    return {
        props: {
            product: product,
            otherVariants: otherVariants,
            category: query.category
        },
    }
}



export default withRouter(Product)