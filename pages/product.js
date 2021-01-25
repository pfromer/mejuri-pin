import { fetchProductDetail } from '../utilities/productFetcher'
import ProductHeader from '../components/productHeader/productHeader'
import Pin from '../components/pin/pin'
import Grid from '../components/grid/grid'
import TappableImage from '../components/tappableImage/tappableImage';
import { TappableImageContainer, StyledAnchor, DistantContainer, ProductName } from '../components/generalStyles';

const Product = ({ product, otherVariants, category }) => {

    const productLink = process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + product.slug;

    return (
        <>
            <ProductHeader
                category={category}
                product={product}
            ></ProductHeader>
            <TappableImageContainer>
                <TappableImage
                    product={product} key={product.variant}
                />
            </TappableImageContainer>
            <DistantContainer>
                <ProductName>{product.name}</ProductName>
                <StyledAnchor href={productLink}>Visist</StyledAnchor>
            </DistantContainer>
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