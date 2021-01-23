import { GridContainer } from './gridStyles'
import { useDispatch } from 'react-redux'
import Pin from '../pin/pin';

const Grid = (props) => {

    const dispatch = useDispatch()
    return (
        <>
            <GridContainer>
                {props.products.map((product, index) => {
                    return (
                        <props.childType
                            key={index + '-' + product.id + '-' + props.category}
                            product={product}>
                        </props.childType>
                    )
                })}
            </GridContainer>
        </>
    )
}

export default Grid;