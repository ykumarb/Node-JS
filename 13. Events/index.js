import EventEmitter from "events";

// creating instance
const customEmitter = new EventEmitter();

// 1. on - listen/register for an event
// 2. emit - emit an event
// 3. once - listen/register for an event once
// 4. off - remove an event listener
// 5. listeners - get all listeners for an event
// 6. listenerCount - get the number of listeners for an event
// 7. prependListener - add a listener to the beginning of the listeners

customEmitter.once("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.emit("response", "john", 34);
customEmitter.emit("response", "johnh", 38);
customEmitter.emit("response", "johnk", 39);