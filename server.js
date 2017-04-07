var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send('日落大道');
})
app.get("/liangbo",function(req,res){
	res.send('歌手');
})
app.get("/123",function(req,res){
	res.send('123');
})
app.get("/@",function(req,res){
	res.send('@');
})
app.get("/_123",function(req,res){
	res.send('_123');
})
app.listen(8080);