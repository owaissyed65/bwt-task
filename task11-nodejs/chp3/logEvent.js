const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')
const logEvent = async (msg) => {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.promises.mkdir(path.join(__dirname, 'logs'))
    }
    const date = `${format(new Date(),'yyyMMdd\tHH:mm:ss')}`
    const logs = `${uuid()}\t${date}\t${msg}\n`
    fs.promises.appendFile(path.join(__dirname,'logs','logevent.txt'),logs)
}
module.exports = logEvent