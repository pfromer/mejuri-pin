import Header from '../components/header/header'
import Grid from '../components/grid/grid'
import Liked from '../components/liked/liked'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const Likes = () => {
    const likes = useSelector(state => state.likesReducer.likes)
    return (
        <>
            <Head>
                <title>Mejuri Pin - My Favorites</title>
            </Head>
            <Header pinsCount={likes.length} />
            <Grid
                products={likes}
                category="likes"
                childType={Liked}
            ></Grid>
        </>
    )
}

export default Likes;