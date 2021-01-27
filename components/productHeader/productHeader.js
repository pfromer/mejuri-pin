import { MainContainer, OtherButtonsContainer, SaveButtonContainer, LinkContainer, SavedSpan } from './productHeaderStyles';
import { StyledAnchor } from '../generalStyles';
import SaveButton from '../saveButton/saveButton';
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link'
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductHeader = (props) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
        setFireAnimation(true);
    }

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setFireAnimation(false);
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    const likes = useSelector(state => state.reducer.likes);
    const [fireAnimation, setFireAnimation] = useState(false);
    var saved = likes.some(l => l.variant == props.product.variant && l.id == props.product.id);
    const productLink = process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug;

    return (
        <header>
            <MainContainer>
                <OtherButtonsContainer>
                    <LinkContainer>
                        <Link href={"/category/[id]"} as={"/category/" + props.category} ><FaChevronLeft /></Link>
                    </LinkContainer>
                    <WhatsappShareButton url={productLink} children={<WhatsappIcon size={30} round={true} />} />
                </OtherButtonsContainer>
                <SaveButtonContainer>
                    <StyledAnchor rounded={true} fireAnimation={fireAnimation} href={"/likes"}>Likes</StyledAnchor>
                    {saved ?
                        <SavedSpan>Saved!</SavedSpan>
                        :
                        <SaveButton onClick={onClick}></SaveButton>
                    }
                </SaveButtonContainer>
            </MainContainer>
        </header>)
}

export default ProductHeader
