const fs = require('fs')
const oldData = fs.createReadStream('./files/lorem.txt',{encoding:'utf-8'})
const ws = fs.createWriteStream('./files/new-lorem.txt')
// oldData.on('data',(chunk)=>{
//     ws.write(chunk)
//     ws.end((cb)=>{})
// })
// same work
oldData.pipe(ws)