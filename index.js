const express = require('express')
const app = express()
const cors  = require('cors')
const mongoose = require('mongoose')
const router = require('./controller/main')


app.use(cors({
    origin: 'https://hotelmern.netlify.app',
    credentials: true, 
  }));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb+srv://amandabral5:Aman1998@cluster0.nvst4jk.mongodb.net/Hotel')
.then(()=>{
console.log('Database Connected');
})
.catch((e)=>{
    console.log('Error Connecting Database' , e.name);
})



app.get('/' , (req,res)=> {
    res.send('Home Page')
})


app.use('/api' , router)

app.listen(  3000, ()=>{
    console.log('Server Started');
})
