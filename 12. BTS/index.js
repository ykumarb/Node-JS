// Example of blocking and non-blocking code

/* 1. Blocking code */
console.log("Start");
alert("Blocking code");
console.log("Stop");

/* 2. Non-Blockinbg code */
console.log("Start");
setTimeout(() => {
  alert("Non-Blocking code");
}, 2000);
console.log("Stop");