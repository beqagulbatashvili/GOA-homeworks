const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("numberEvent", function (num) {
    console.log("Received number:", num)
})

emitter.emit("numberEvent", 42)