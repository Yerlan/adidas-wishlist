import { combineReducers } from 'redux';

// Reducers
import searchLayoutReducer from './search-layout-reducer';
import productReducer from './product-reducer';

// Combine Reducers
var reducers = combineReducers({
    productsState: productReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
