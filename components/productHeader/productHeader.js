
import { StyledHeader, OtherButtonsContainer, SaveButtonContainer, LinkContainer, StyledAnchor, LikesLinkContainer, SavedSpan } from './productHeaderStyles';
import SaveButton from '../saveButton/saveButton';
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link'
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { FaThumbtack } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ProductHeader = (props) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
        setSaved(true);
    }

    const [saved, setSaved] = useState(false);

    const productLink = process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug;

    return (
        <StyledHeader>
            <OtherButtonsContainer>
                <LinkContainer>
                    <Link href={"/category/[id]"} as={"/category/" + props.category} ><FaChevronLeft /></Link>
                </LinkContainer>
                <WhatsappShareButton url={productLink} children={<WhatsappIcon size={30} round={true} />} />

                <LikesLinkContainer animate={saved}>
                    <Link href={"/likes"}><FaThumbtack /></Link>
                </LikesLinkContainer>


            </OtherButtonsContainer>

            <SaveButtonContainer>
                <StyledAnchor href={productLink}>Visit</StyledAnchor>
                {!saved &&
                    <SaveButton onClick={onClick}></SaveButton>
                }
                {saved &&
                    <SavedSpan>Saved!</SavedSpan>

                }

            </SaveButtonContainer>

        </StyledHeader>)
}

export default ProductHeader
