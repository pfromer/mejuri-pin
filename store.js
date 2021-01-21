import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import likes from './pages/likes';
// create your reducer
const reducer = (state = { likes: [], categories_fetched: [] }, action) => {
    switch (action.type) {
        case HYDRATE:
            return state;
        case 'ADD_NEW_LIKE':
            return { ...state, likes: [...state.likes, action.newLike] };
        case 'REMOVE_LIKE':
            return { ...state, likes: state.likes.filter(l => l.id != action.product.id) };
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false });