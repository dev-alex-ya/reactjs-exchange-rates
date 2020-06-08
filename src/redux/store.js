import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk'

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware: ', store.getState())
  return result
}

/**Redux devtools */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));

export default store