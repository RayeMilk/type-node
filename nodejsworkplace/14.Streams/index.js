import { createReadStream } from "fs";

//const stream = createReadStream("./big.txt", {highWaterMark: 90000}); // Control size

const stream = createReadStream("./big.txt", {encoding: "utf8"});

stream.on('data', (result) => {
    console.log(result);
}) 
