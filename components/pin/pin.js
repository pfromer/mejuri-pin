import Image from 'next/image'
import { ImageContainer, TextContainer, OuterLink, ArrowContainer, OverlayAnimation, OverlayText, Overlay, ButtonContainer } from './pinStyles'
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import SaveButton from '../saveButton/saveButton';
import Tappable from 'react-tappable';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const Pin = (props) => {

    const router = useRouter()

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
        setshowAnimation(true);
    }

    const handleTap = (e) => {
        e.preventDefault()

        router.push({
            pathname: '/product',
            query: { id: props.product.id, variant: props.product.variant, category: props.product.category },
        })
    }

    const [showButton, setShowButton] = useState(false);
    const [showAnimation, setshowAnimation] = useState(false);

    return (
        <ImageContainer
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <Tappable onTap={handleTap}>
                <Image
                    src={props.product.image}
                    alt={props.product.name}
                    width={500}
                    height={500}
                >
                </Image>
            </Tappable>

            {!showAnimation && showButton && (
                <>
                    <Overlay></Overlay>
                    <ButtonContainer>
                        <SaveButton onClick={onClick} ></SaveButton>
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
                    <ArrowContainer>
                        <FaArrowUp />
                    </ArrowContainer>
                    <TextContainer>
                        mejuri.com
                    </TextContainer>
                </OuterLink>
            )}
        </ImageContainer>
    )
}

export default Pin;