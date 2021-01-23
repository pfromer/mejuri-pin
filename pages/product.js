
import { fetchProductDetail } from '../utilities/productFetcher'
import Pin from '../components/pin/pin'
import Grid from '../components/grid/grid'
import SaveButton from '../components/saveButton/saveButton'
import { useDispatch } from 'react-redux'

const Product = ({ product, otherVariants, category }) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: product })
    }

    return (
        <>
            <SaveButton onClick={onClick}></SaveButton>
            <Pin product={product} onChildClick={() => { }}></Pin>
            <Grid
                products={otherVariants}
                onChildClick={() => { }}
                category={category}
                childType={Pin}
            ></Grid>
        </>
    )
}

export async function getServerSideProps({ query }) {

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

export default Product