const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;

const catagory= require('./data/catagory.json')
app.use(cors())

app.get('/',(req, res)=>{
    res.send('dragon os running')

});

app.get('/catagory',(req,res)=>{
    res.send(catagory)
})
app.listen(port,()=>{
    console.log(`Dragon is running on port:${port}`)
})