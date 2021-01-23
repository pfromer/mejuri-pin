
import React from 'react';
import { StyledHeader, OtherButtonsContainer, SaveButtonContainer } from './productHeaderStyles';
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
                <Link href="/category/[id]" as={"/category/" + props.category} ><FaChevronLeft></FaChevronLeft></Link>
                <WhatsappShareButton url={props.product.image} children={<WhatsappIcon size={28} round={true} />} />
                <a href={process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug}>VISIT</a>
            </OtherButtonsContainer>
            <SaveButtonContainer>
                <SaveButton onClick={onClick}></SaveButton>
            </SaveButtonContainer>

        </StyledHeader>)
}

export default ProductHeader
