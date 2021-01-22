import Image from 'next/image'
import { ImageContainer, TextContainer, OuterLink, ArrowContainer, OverlayAnimation, OverlayText } from './pinStyles'
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import Button from '../button/button';

const Pin = (props) => {

    const onClick = () => {
        props.onPinClick(props.product)
        setshowAnimation(true);
    }


    const [showButton, setShowButton] = useState(false);
    const [showAnimation, setshowAnimation] = useState(false);
    return (
        <ImageContainer
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <Image
                src={props.product.image}
                alt={props.product.name}
                width={500}
                height={500}
            >

            </Image>

            {!showAnimation && showButton && (
                <Button onClick={onClick} ></Button>
            )}

            {showAnimation && (
                <OverlayAnimation>
                    <OverlayText>Saved!</OverlayText>
                </OverlayAnimation>
            )}



            <OuterLink>
                <ArrowContainer>
                    <FaArrowUp />
                </ArrowContainer>
                <TextContainer>
                    mejuri.com
            </TextContainer>
            </OuterLink>
        </ImageContainer>
    )
}

export default Pin;