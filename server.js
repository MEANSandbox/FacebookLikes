var express = require('express')
var app = express()
var FB = require('fb')
app.set('port',3000)
app.use('/public',express.static(__dirname+'/public'))
app.use('/bower_components',express.static(__dirname+'/bower_components'))

app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname+'/public'})
})

app.listen(app.get('port'),function(err) {
    console.log("App is Running at PORT ",app.get('port'))
})