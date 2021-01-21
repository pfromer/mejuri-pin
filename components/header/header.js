import CustomLink from '../link/link'
import { StyledList, NavBar } from './headerStyles'
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
const Header = () => {


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);



  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (<NavBar visible={visible}>
    <StyledList>
      <li key={0}>
        <CustomLink href="/likes" text="Likes" />
      </li>
      {categories.map((c, index) => <li key={index + 1}><CustomLink href="/category/[id]" as={"/category/" + c.endpoint} text={c.nav} /></li>)}
    </StyledList>
  </NavBar>)


}

export default Header
