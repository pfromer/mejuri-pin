
import React from 'react';
import { StyledHeader, OtherButtonsContainer, SaveButtonContainer, LinkContainer, StyledAnchor } from './productHeaderStyles';
import SaveButton from '../saveButton/saveButton';
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link'
import { WhatsappShareButton, WhatsappIcon } from "react-share";

import { useDispatch } from 'react-redux'


const ProductHeader = (props) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({ type: 'ADD_NEW_LIKE', newLike: props.product })
    }

    return (
        <StyledHeader>
            <OtherButtonsContainer>
                <LinkContainer>
                    <Link href="/category/[id]" as={"/category/" + props.category} ><FaChevronLeft></FaChevronLeft></Link>
                </LinkContainer>
                <WhatsappShareButton url={props.product.image} children={<WhatsappIcon size={30} round={true} />} />

            </OtherButtonsContainer>
            <SaveButtonContainer>
                <StyledAnchor href={process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug}>Visit</StyledAnchor>
                <SaveButton onClick={onClick}></SaveButton>
            </SaveButtonContainer>

        </StyledHeader>)
}

export default ProductHeader
