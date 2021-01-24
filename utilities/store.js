import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";


const reducer = (state = { likes: [], categories_fetched: [] }, action) => {
    switch (action.type) {
        case 'ADD_NEW_LIKE':
            if (state.likes.some(l => l.id == action.newLike.id && l.variant == action.newLike.variant)) {
                return state;
            } else {
                return { ...state, likes: [...state.likes, action.newLike] };
            }
        case 'REMOVE_LIKE':
            return { ...state, likes: state.likes.filter(l => l.id != action.product.id) };
        default:
            return state;
    }
};

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
    reducer,
    // OTHER REDUCERS WILL BE ADDED HERE
});

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {

    return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
    if (isServer) {
        //If it's on server side, create a store
        return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore, persistReducer } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "nextjs",
            whitelist: ["reducer"], // only reducer will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);