import { GridContainer } from './gridStyles'
import Pin from '../pin/pin';

const Grid = (props) => (
    <>
        <GridContainer>
            {props.products.map((product, index) => {
                return (
                    <props.childType
                        key={index + '-' + product.id + '-' + props.category}
                        product={product}
                        onChildClick={props.onChildClick}>
                    </props.childType>
                )
            })}
        </GridContainer>
    </>
)

export default Grid;