import CustomLink from '../link/link'
import { StyledList, StyledNavBar } from './navbarStyles'
import React from 'react';

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
  return (<StyledNavBar>
    <StyledList>
      <li key={0}>
        <CustomLink
          href="/likes"
          text="Likes" />
      </li>
      {categories.map((c, index) =>
        <li key={index + 1}>
          <CustomLink
            href="/category/[id]"
            as={"/category/" + c.endpoint}
            text={c.nav} />
        </li>)}
    </StyledList>
  </StyledNavBar>)
}

export default NavBar