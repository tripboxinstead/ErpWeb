import { createStore , applyMiddleware } from 'redux';
// import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer  from './reducers';


let store = createStore(
    rootReducer,
    //persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;