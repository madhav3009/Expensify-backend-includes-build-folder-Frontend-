const express=require('express');
const bodyParser=require('body-parser');

const cors=require('cors'); // it will help  me to replace localhost with url further
const app=express();
const path=require('path');


const port=process.env.PORT || 8086;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'build'))); 

app.post('/addExpense', (req, res) => {
  console.log(req.body); 
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port,()=>{
  console.log(`server is running at port ${port}...`);
});