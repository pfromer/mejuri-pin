import Image from 'next/image'
import { ImageContainer, TextContainer, OuterLink, ArrowContainer, OverlayAnimation, OverlayText } from './pinStyles'
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import Button from '../button/button';
import Tappable from 'react-tappable';
import { useRouter } from 'next/router'

const Pin = (props) => {

    const router = useRouter()

    const onClick = () => {
        props.onPinClick(props.product)
        setshowAnimation(true);
    }

    const handleTap = (e) => {
        e.preventDefault()
        console.log("clickk", props.product)

        router.push({
            pathname: '/product',
            //query: { id: props.product.id + "__" + props.product.variant + "__" + props.product.category },
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
                    <OverlayAnimation></OverlayAnimation>
                    <Button onClick={onClick} ></Button>
                </>
            )}

            {showAnimation && (
                <OverlayAnimation>
                    <OverlayText>Saved!</OverlayText>
                </OverlayAnimation>
            )}

            {!showAnimation && showButton && (
                <OuterLink>
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