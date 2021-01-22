import { GridContainer } from './gridStyles'
import Pin from '../pin/pin';

const Grid = (props) => (
    <>
        <GridContainer>
            {props.products.map((product, index) => {
                return (
                    <Pin
                        key={index + '-' + product.id + '-' + props.category} product={product} onPinClick={props.onPinClick}></Pin>
                )
            })}
        </GridContainer>
    </>
)

export default Grid;