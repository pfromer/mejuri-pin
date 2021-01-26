import { ImageContainer, TextContainer, OuterLink, ArrowContainer, OverlayAnimation, OverlayText, Overlay, ButtonContainer, ProductNameContainer, ArrowAndTextContainer } from './pinStyles'
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import SaveButton from '../saveButton/saveButton';
import TappableImage from '../tappableImage/tappableImage';
import { useDispatch } from 'react-redux'

const Pin = (props) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
        setshowAnimation(true);
    }

    const [showButton, setShowButton] = useState(false);
    const [showAnimation, setshowAnimation] = useState(false);

    return (
        <div>
            <ImageContainer
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
            >
                <TappableImage
                    product={props.product}
                />

                {!showAnimation && showButton && (
                    <>
                        <Overlay></Overlay>
                        <ButtonContainer>
                            <SaveButton onClick={onClick} rounded={true} showIcon={true} ></SaveButton>
                        </ButtonContainer>
                    </>
                )}

                {showAnimation && (
                    <OverlayAnimation>
                        <OverlayText>Saved!</OverlayText>
                    </OverlayAnimation>
                )}

                {!showAnimation && showButton && (
                    <OuterLink target="_blank" href={process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug}>
                        <ArrowAndTextContainer>
                            <ArrowContainer>
                                <FaArrowUp />
                            </ArrowContainer>
                            <TextContainer>
                                Mejuri.com
                            </TextContainer>
                        </ArrowAndTextContainer>
                        <ProductNameContainer length={props.product.name.length}>
                            {props.product.name}
                        </ProductNameContainer>
                    </OuterLink>
                )}
            </ImageContainer>
        </div >
    )
}

export default Pin;