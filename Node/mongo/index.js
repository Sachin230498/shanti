const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');   

dotenv.config();    //Load environment variables from.env file.

// console.log(dotenv.config())

let api = process.env.API;
// console.log(api)
const app = express();
app.use(express.json());



 mongoose.connect(api)
.then(()=>{
    console.log('Connected to MongoDB')
}).catch(err => console.error('Could not connect to MongoDB', err));
// console.log(d)


const UserScema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
        
    },
    email:{
         type:Str,
         required: true,
         unique: true       
    }
})

const User = mongoose.model('User', UserScema);

app.post('/addUser', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
})


const PORT = process.env.PORT || 8081 ;

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT} `)
})