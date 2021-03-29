import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import createReduxSaga from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./saga";

export const history = createBrowserHistory();
const sagaInstance = createReduxSaga({
  context: {
    history,
  },
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaInstance))
);
sagaInstance.run(rootSaga);

export default store;
