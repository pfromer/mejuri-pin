import CustomLink from '../link/link'
import { StyledList, StyledNavBar } from './navbarStyles'
import React, { useState, useEffect } from 'react';

import { debounce } from '../../utilities/helpers';

const categories = [
  {
    endpoint: 'shop_all',
    nav: 'All'
  },
  {
    endpoint: 'bracelets',
    nav: 'Bracelets'
  },
  {
    endpoint: 'earrings',
    nav: 'Earrings'
  },
  {
    endpoint: 'pendants',
    nav: 'Pendants'
  },
  {
    endpoint: 'rings',
    nav: 'Rings'
  }
];

const NavBar = () => {

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

  return (<StyledNavBar visible={visible}>
    <StyledList>
      <li key={0}>
        <CustomLink href="/likes" text="Likes" />
      </li>
      {categories.map((c, index) => <li key={index + 1}><CustomLink href="/category/[id]" as={"/category/" + c.endpoint} text={c.nav} /></li>)}
    </StyledList>
  </StyledNavBar>)
}

export default NavBar
