import Image from 'next/image'
import { ImageContainer, GridContainer } from './gridStyles'


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
                    </ImageContainer>
                )
            })}
        </GridContainer>
    </>
)

export default Grid