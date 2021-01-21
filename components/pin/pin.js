import Image from 'next/image'
import { ImageContainer, SaveButton, TextContainer, IconContainer, OuterLink, ArrowContainer } from './pinStyles'
import { FaThumbtack, FaArrowUp } from "react-icons/fa";

const Pin = (props) => (
    <ImageContainer onClick={() => props.onPinClick(props.product)} >
        <Image
            src={props.product.image}
            alt={props.product.name}
            width={500}
            height={500}
        />
        <SaveButton>
            <IconContainer>
                <FaThumbtack />
            </IconContainer>
            <TextContainer>
                Save
            </TextContainer>
        </SaveButton>

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

export default Pin;