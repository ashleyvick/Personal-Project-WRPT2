import { create } from "istanbul-reports";
import { createStore } from "redux";
import reducer from "./reducer";

export default createStore(reducer);
