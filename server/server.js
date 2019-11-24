var express = require('express');
var app = express();

app.use(express.static('../build'));

app.listen(8085,()=>{
    console.log("server listening to port 8085");
})