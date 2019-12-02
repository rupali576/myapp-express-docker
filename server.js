const express=require('express')
const productRouter=require('./routes/product')
const app=express()
const bodyParser=require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.use('/product',productRouter)


app.get('/',(request,response)=>{
    response.send("Welcome to my backend");s
})

app.listen(9898,'0.0.0.0',()=>{
    console.log("Server started at poert 9898!!!!!!......")
})