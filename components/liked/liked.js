import Image from 'next/image'
import { ImageContainer } from '../pin/pinStyles'

import { CrossContainer } from './likedStyles'

import { FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router'

const Liked = (props) => {

    console.log("liked props", props);

    return (
        <ImageContainer>
            <Image
                src={props.product.image}
                alt={props.product.name}
                width={500}
                height={500}
            >
            </Image>
            <CrossContainer>
                <FaTimes onClick={() => props.onChildClick(props.product)} />
            </CrossContainer>

        </ImageContainer>
    )
}

export default Liked;