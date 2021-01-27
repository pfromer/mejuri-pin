import { TappableImageContainer, DistantContainer, ProductName, StyledAnchor, ButtonContainer } from './productMainStyles'
import Grid from '../grid/grid';
import Pin from '../pin/pin';
import TappableImage from '../tappableImage/tappableImage';

const ProductMain = (props) => {
    const productLink = process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug;
    return (
        <>
            <TappableImageContainer>
                <TappableImage
                    product={props.product} key={props.product.variant}
                />
            </TappableImageContainer>
            <DistantContainer>
                <ProductName>{props.product.name}</ProductName>
                <StyledAnchor href={productLink}>Visit</StyledAnchor>
            </DistantContainer>
            <Grid
                products={props.otherVariants}
                onChildClick={() => { }}
                category={props.category}
                childType={Pin}
            ></Grid>
        </>
    )
}

export default ProductMain;