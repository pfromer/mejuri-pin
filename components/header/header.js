import CustomLink from '../link/link'
import { StyledHeader } from './headerStyles'

const categories = [
  {
    endpoint: 'shop_all',
    nav: 'all'
  },
  {
    endpoint: 'bracelets',
    nav: 'bracelets'
  },
  {
    endpoint: 'earrings',
    nav: 'earrings'
  },
  {
    endpoint: 'pendants',
    nav: 'pendants'
  },
  {
    endpoint: 'rings',
    nav: 'rings'
  }
]

const Header = () => (
  <StyledHeader>
    <CustomLink href="/" text="Likes" />
    {categories.map(c => <CustomLink href="/category/[id]" as={"/category/" + c.endpoint} text={c.nav} />)}
  </StyledHeader>
)

export default Header
