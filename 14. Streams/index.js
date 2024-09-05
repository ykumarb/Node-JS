import { createReadStream } from "fs";

const stream = createReadStream("./big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (data) => {
    console.log(data);
});