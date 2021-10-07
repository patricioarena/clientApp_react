import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducer';
import authReducer from './reducers/authReducer';


import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    contador: counterReducer,
    auth: authReducer,
})

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

export default function generateStore() {
    const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)))
    return store;
}
