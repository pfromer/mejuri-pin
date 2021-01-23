import NavBar from '../components/navbar/navbar'
import Grid from '../components/grid/grid'
import Liked from '../components/liked/liked'
import { useSelector } from 'react-redux'

const Likes = () => {
    const likes = useSelector(state => state.reducer.likes)
    return (
        <>
            <NavBar />
            <Grid
                products={likes}
                category="likes"
                childType={Liked}
            ></Grid>
        </>
    )
}

export default Likes;