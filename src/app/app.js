import { createStore } from "redux";
import { tubeLight } from "./reducers/reducers.js";
const store = createStore(tubeLight);

console.log("Initially tubelight is: ", store.getState());

store.dispatch({ type: "TURN_ON" });
console.log("Now tubelight is: ", store.getState());



console.log("welc f s");
