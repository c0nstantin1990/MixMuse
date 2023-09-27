// this is not an error, not even a warning or deprecation. It's only a visual indicator that we should use Redux Toolkit instead
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);
export default store;