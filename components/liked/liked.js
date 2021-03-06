import Image from "next/image";
import { ImageContainer } from "../pin/pinStyles";
import { CrossContainer } from "./likedStyles";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE_LIKE } from "../../redux/likesReducer";

const Liked = (props) => {
  const dispatch = useDispatch();
  return (
    <ImageContainer>
      <a
        target="_blank"
        href={
          process.env.NEXT_PUBLIC_MEJURI_BASE_PRODUCT_URL + props.product.slug
        }
      >
        <Image
          src={props.product.image}
          alt={props.product.name}
          width={500}
          height={500}
        ></Image>
      </a>
      <CrossContainer
        onClick={() => dispatch({ type: REMOVE_LIKE, product: props.product })}
      >
        <FaTimes />
      </CrossContainer>
    </ImageContainer>
  );
};

export default Liked;
