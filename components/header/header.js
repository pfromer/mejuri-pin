import CustomLink from '../link/link'
import { StyledHeader } from './headerStyles'

const Header = () => (
  <StyledHeader>

    <CustomLink href="/" text="Likes" />
    <CustomLink href="/category/[id]" as="/category/shop_all" text="All" />
    <CustomLink href="/category/[id]" as="/category/bracelets" text="bracelets" />

    <CustomLink href="/category/[id]" as="/category/earrings" text="earrings" />
    <CustomLink href="/category/[id]" as="/category/pendants" text="pendants" />
    <CustomLink href="/category/[id]" as="/category/rings" text="rings" />
  </StyledHeader>
)

export default Header
