const fs = require('fs')
const path = require('path')
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err)throw err
        console.log('mkdir')
    })
}
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err)throw err
        console.log('rmdir')
    })
}