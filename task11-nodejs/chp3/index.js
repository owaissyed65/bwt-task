const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const EventEmiiter = require('events');
const logEvent = require('./logEvent');
const newEvent = new EventEmiiter();

newEvent.on('log', async (msg) => await logEvent(msg))
setTimeout(() => {
    newEvent.emit('log',"Event is Emittedd")
}, 2000);

