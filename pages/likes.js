import Header from '../components/header/header'
import Grid from '../components/grid/grid'
import { connect } from "react-redux";
import Liked from '../components/liked/liked'

const Likes = ({ likes, dispatch }) => {

    const removeLike = (product) => dispatch({ type: 'REMOVE_LIKE', product: product });

    return (
        <>
            <Header />
            <Grid
                products={likes}
                onChildClick={removeLike}
                category="likes"
                childType={Liked}
            ></Grid>
        </>
    )
}

export default connect((state) => state)(Likes);