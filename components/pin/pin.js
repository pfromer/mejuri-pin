import { ImageContainer, OverlayAnimation, OverlayText, Overlay, ButtonContainer } from './pinStyles'
import OuterLink from "../outerLink/outerLink"
import { useState } from 'react';
import SaveButton from '../saveButton/saveButton';
import TappableImage from '../tappableImage/tappableImage';
import { useDispatch } from 'react-redux'
import { ADD_NEW_LIKE } from '../../redux/reducer'

const Pin = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({ type: ADD_NEW_LIKE, newLike: props.product })
        setSaved(true);
    }

    const [showButtonAndLink, setShowButtonAndLink] = useState(false);
    const [saved, setSaved] = useState(false);
    const doShowButtonAndLink = !saved && showButtonAndLink;

    return (
        <ImageContainer
            onMouseEnter={() => setShowButtonAndLink(true)}
            onMouseLeave={() => setShowButtonAndLink(false)}
        >
            <TappableImage
                product={props.product}
            />

            {doShowButtonAndLink && (
                <>
                    <Overlay
                        target="_blank"
                        href={process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug}
                    />
                    <ButtonContainer>
                        <SaveButton
                            onClick={onClick}
                            rounded={true}
                            showIcon={true}
                        />
                    </ButtonContainer>
                </>
            )}

            {saved && (
                <OverlayAnimation>
                    <OverlayText>Saved!</OverlayText>
                </OverlayAnimation>
            )}

            {doShowButtonAndLink && (
                <OuterLink
                    product={props.product}
                />
            )}
        </ImageContainer>
    )
}

export default Pin;