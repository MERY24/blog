const express =require('express');
const mongoose  = require('mongoose');
const bodyParser =require('body-parser');
const cors= require('cors');
const blogRoutes= require('./routes/blogRoutes');
//cree une instance de express
const app= express();

// middleware khalouta
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use (cors())

// listening for rqst on port 3001 and connecting to database
const PORT=process.env.PORT || 3001;
const dburl=' mongodb://127.0.0.1:27017/liv';

// mongoose.connect(dburl,{useUnifiedTopology: true ,useNewUrlParser: true },
// (err)=>{app.listen(PORT,(req,res)=>console.log("connected to mongo on port",PORT)) });


mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT,(req,res)=>console.log(`connected to mongo on port ${PORT}`)))
  .catch(err => console.log(err));


app.get('/',(req,res)=>{
//res.send('<h2>hopfully this works</h2>');
console.log(req.method);
 res.sendFile('./index.html',{root:__dirname});
// res.redirect('/blogs');

});

//differents blog routes 
app.use('/blogs',blogRoutes);


//404 ma préferé
app.use((req, res) => {
  res.status(404).json({message:"couldn't find the resource you're looking for ... sorry"});
});

module.exports = app;