const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("hello", function () {
    console.log("Hello event triggered")
})

emitter.emit("hello")



