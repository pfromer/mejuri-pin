import {
  TextContainer,
  OuterLinkContainer,
  ArrowContainer,
  ProductNameContainer,
  ArrowAndTextContainer,
} from "./outerLinkStyles";
import { FaArrowUp } from "react-icons/fa";

const OuterLink = (props) => {
  const nameLength = props.product.name.length;
  return (
    <OuterLinkContainer
      target="_blank"
      href={
        process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug
      }
    >
      <ArrowAndTextContainer animationDelay={nameLength * 0.08}>
        <ArrowContainer>
          <FaArrowUp />
        </ArrowContainer>
        <TextContainer>Mejuri.com</TextContainer>
      </ArrowAndTextContainer>
      <ProductNameContainer animationDuration={nameLength * 0.2}>
        {props.product.name}
      </ProductNameContainer>
    </OuterLinkContainer>
  );
};

export default OuterLink;
