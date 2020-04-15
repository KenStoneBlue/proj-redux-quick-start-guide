import { createStore } from "redux";
import { tubeLight } from "./reducers/reducers.js";
const store = createStore(tubeLight);

console.log("Initially tubelight is: ", store.getState());

store.dispatch({ type: "TURN_ON" });
console.log("Now tubelight is: ", store.getState());

const button = document.createElement("button");
button.setAttribute("id", "lightButton");
var text = document.createTextNode("Toggle Light");
button.appendChild(text);
document.body.appendChild(button);


document.getElementById("lightButton").addEventListener("click", () => {
 if (store.getState() === "ON") {
   store.dispatch({ type: "TURN_OFF" });
 } else {
   store.dispatch({ type: "TURN_ON" });
 }
});




console.log("welc f s");

const render = () => {
 document.body.innerText = store.getState();
 document.body.appendChild(button);
};
store.subscribe(render);
render();

