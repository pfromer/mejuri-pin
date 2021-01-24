import CustomLink from '../link/link'
import NavBar from '../navbar/navbar'
import { StyledHeader, PinsCountContainer, BlockContainer } from './headerStyles'
import React, { useState, useEffect } from 'react';
import { debounce } from '../../utilities/helpers';

const Header = (props) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (<StyledHeader visible={visible}>
        <NavBar></NavBar>
        <BlockContainer>
            <PinsCountContainer><span>{props.pinsCount} Pins</span></PinsCountContainer>
        </BlockContainer>

    </StyledHeader>)
}

export default Header
