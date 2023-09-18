import { legacy_createStore as createStore, applyMiddleware,combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import holderReducer from './Holder';
import ConnectionReducer from './ConnectionReducer';

const rootReducer = combineReducers({
    holder: holderReducer, // Replace 'holder' with your existing reducer key
    connectionModal: ConnectionReducer, // Add connectionModalReducer
  });

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancer);
export default store;
