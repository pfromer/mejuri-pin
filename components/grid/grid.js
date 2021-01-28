import { GridContainer } from "./gridStyles";

const Grid = (props) => {
  return (
    <>
      <GridContainer>
        {props.products.map((product, index) => {
          return (
            <props.childType
              key={index + "-" + product.id + "-" + props.category}
              product={product}
            ></props.childType>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Grid;
