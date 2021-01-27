import { fetchProductDetail } from '../utilities/productFetcher'
import ProductHeader from '../components/productHeader/productHeader'
import ProductMain from '../components/productMain/productMain'

const Product = ({ product, otherVariants, category }) => {
    return (
        <>
            <ProductHeader
                category={category}
                product={product}
            />
            <ProductMain
                category={category}
                product={product}
                otherVariants={otherVariants}
            />
        </>
    )
}

export async function getServerSideProps({ query }) {
    const jsonRes = await fetchProductDetail(query.category, query.id, query.variant);
    return {
        props: {
            product: jsonRes.product,
            otherVariants: jsonRes.otherVariants,
            category: query.category
        },
    }
}

export default Product