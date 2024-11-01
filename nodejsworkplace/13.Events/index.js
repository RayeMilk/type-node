import EventEmitter from "events";

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
})

customeEmitter.emit("response", "John", 34);
