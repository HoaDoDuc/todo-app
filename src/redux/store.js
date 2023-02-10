import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhencer = composeWithDevTools();
const store = createStore(rootReducer, composedEnhencer);

export default store;
