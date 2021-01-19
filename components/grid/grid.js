import Image from 'next/image'
import { ImageContainer, GridContainer, SaveButton, TextContainer, IconContainer, OuterLink, ArrowContainer } from './gridStyles'
import { FaThumbtack, FaArrowUp } from "react-icons/fa";


const Grid = (props) => (
    <>
        <GridContainer>
            {props.products.map((product, index) => {
                return (
                    <ImageContainer key={index}>
                        <Image
                            src={"https://dto508s2j2p46.cloudfront.net" + product.image}
                            alt={product.name}
                            key={index}
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
            })}
        </GridContainer>
    </>
)

export default Grid