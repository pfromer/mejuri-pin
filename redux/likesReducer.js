export const ADD_NEW_LIKE = 'ADD_NEW_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const likesReducer = (state = { likes: [], categories_fetched: [] }, action) => {
    switch (action.type) {
        case ADD_NEW_LIKE:
            if (state.likes.some(l => l.id == action.newLike.id && l.variant == action.newLike.variant)) {
                return state;
            } else {
                return { ...state, likes: [...state.likes, action.newLike] };
            }
        case REMOVE_LIKE:
            return { ...state, likes: state.likes.filter(l => l.id != action.product.id || l.variant != action.product.variant) };
        default:
            return state;
    }
};

export default likesReducer;