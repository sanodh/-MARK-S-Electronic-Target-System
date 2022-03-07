const express = require("express");
const cors=require("cors");
const news = require('./routes/news');

const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(news);

app.listen(8000, (req,res)=>{
    console.info(`App running on port 8000`)
  });