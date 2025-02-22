const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const port=process.env.port || 3000
const Productroutes=require('./routes/productroutes')

app.use(cors())
app.use(express.json())

app.use('/api/products',Productroutes)

mongoose.connect('mongodb+srv://grmonishs65:2007@asap-project.izf50.mongodb.net/adsds').then(()=>console.log('Connected to Mongodb')).catch(err=>console.log('not Connected',err))



app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
    
})
