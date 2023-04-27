const os = require('os')
const fs = require('fs')
const {add ,sub,mul,div} = require('./chp1/operation')
const path = require('path')
console.log('hello world')
// console.log(global)
// console.log(os.type())
// console.log(os.version())
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname,path.basename(__filename)))
// console.log(add(2,2))
// console.log(sub(2,2))
// console.log(mul(2,2))
// console.log(div(2,2))




fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
})
fs.writeFile(path.join(__dirname,'files','reply.txt'),"hello we are writing",'utf-8',(err)=>{
    console.log('write completed')
    fs.appendFile(path.join(__dirname,'files','reply.txt'),"\n\nrenamining",'utf-8',(err)=>{
        console.log('Append completed')
        fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newreply.txt'),(err)=>{
            console.log('Renaming completed')
            
        })
    })  
})
// this is call back so we have to solve through promise and i already know hoe promises works and even have hand on practicing on it so i skip it for now
process.on('uncaughtException',(err)=>{
    console.log(err)
})







