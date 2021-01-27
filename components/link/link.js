import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledAnchor } from './linkStyles'

const CustomLink = ({ href, as, text }) => {
    const router = useRouter()
    const active = router.asPath === as || router.asPath === href;

    return <Link href={href} as={as}>
        <StyledAnchor active={active}>
            {text}
        </StyledAnchor>
    </Link>
}

export default CustomLink