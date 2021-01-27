import Image from 'next/image'
import Tappable from 'react-tappable';
import { ImageContainer } from './tappableImageStyles.js'
import { useRouter } from 'next/router';

const TappableImage = (props) => {

    const router = useRouter()

    const handleTap = (e) => {
        e.preventDefault()

        router.push({
            pathname: '/product',
            query: { id: props.product.id, variant: props.product.variant, category: props.product.category },
        })
    }

    return (
        <ImageContainer>
            <Tappable onTap={handleTap} moveThreshold={40}>
                <Image
                    src={props.product.image}
                    alt={props.product.src}
                    width={500}
                    height={500}
                >
                </Image>
            </Tappable>
        </ImageContainer>
    )
}

export default TappableImage;