const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;

const catagory= require('./data/catagory.json')
const news=require('./data/news.json')
app.use(cors())

app.get('/',(req, res)=>{
    res.send('dragon os running')

});

app.get('/catagory',(req,res)=>{
    res.send(catagory)
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/news/:id',(req,res)=>{

    const id=req.params.id
    const newsSelected=news.find(n=> n._id=== id);
    res.send(newsSelected)
});
app.get('/catagory/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    if(id===0){
        res.send(news)
    }
    else{
        
        const categoryNews=news.filter(n=> parseInt(n.category_id) ===id)
        res.send(categoryNews)
    }
  
})

app.listen(port,()=>{
    console.log(`Dragon is running on port:${port}`)
})