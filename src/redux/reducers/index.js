import { combineReducers } from 'redux';
import tourDetailReducer from './tourDetailReducer';


export default combineReducers({
    tour: tourDetailReducer,        
});