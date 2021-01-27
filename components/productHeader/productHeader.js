
import { MainContainer, OtherButtonsContainer, SaveButtonContainer, LinkContainer, SavedSpan } from './productHeaderStyles';
import { StyledAnchor } from '../generalStyles';
import SaveButton from '../saveButton/saveButton';
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link'
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { FaThumbtack } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const ProductHeader = (props) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
        setFireAnimation(true);
    }

    const likes = useSelector(state => state.reducer.likes);
    const [fireAnimation, setFireAnimation] = useState(false);
    var saved = likes.some(l => l.variant == props.product.variant && l.id == props.product.id);
    const productLink = process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug;

    return (
        <header>
            { fireAnimation && saved &&
                <></>
            }
            <MainContainer>
                <OtherButtonsContainer>
                    <LinkContainer>
                        <Link href={"/category/[id]"} as={"/category/" + props.category} ><FaChevronLeft /></Link>
                    </LinkContainer>
                    <WhatsappShareButton url={productLink} children={<WhatsappIcon size={30} round={true} />} />
                </OtherButtonsContainer>
                <SaveButtonContainer>
                    <StyledAnchor rounded={true} fireAnimation={saved && fireAnimation} href={"/likes"}>Likes</StyledAnchor>
                    {!saved &&
                        <SaveButton onClick={onClick}></SaveButton>
                    }
                    {saved &&
                        <SavedSpan>Saved!</SavedSpan>
                    }
                </SaveButtonContainer>
            </MainContainer>
        </header>)
}

export default ProductHeader
