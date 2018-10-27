import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import profile from './reducer/profile';


const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

    const createreducer =combineReducers({profile})

const store  = createStore(createreducer,
    composeEnhancers(applyMiddleware(thunk)))


   export default store;


