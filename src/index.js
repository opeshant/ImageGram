import express from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './controller/postController.js';


// express module returns a function
// express is a function 

const PORT = 3000;
const app = express(); // sever object


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/' , (req , res) =>{
    return res.send('hello world');
});

app.get('/ping',(req , res)=>{
    return res.json({message : "hey this is the response"});
    console.log(res.body);
    console.log(res.query);
    // this fucntion whaterver u pass will be sended as json obejct

});

app.get('/hello' , (req , res) =>{
    return res.send('fuck u ');
});


app.post('/posts', createPost);


// callback is excuted when server is runnig fine

app.listen(PORT , ()=>{

    console.log('connected successfully');
    connectDB();
})


// odm or orm -> object document / relational mapper
// these libaraies provide us function which are object oriented function 
// predefined function provided 
// automatically converts the fucntion call to queries


// similar to the basic http.createService we builtin 


// in express u can define in the sepicifc url how will be ur req and the res will be done 


// typing something in url is only get request