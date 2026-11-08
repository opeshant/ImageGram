import express from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './controller/postController.js';
import { s3uploader } from './config/multerConfig.js';


// express module returns a function
// express is a function 

const PORT = 3000;
const app = express(); // sever object


app.use(express.json());
// use function add the middlewares to every single request 
// express.json() is a middlewares for serilizatoin and deserilization 

app.use(express.text());
// reads text also not just json

app.use(express.urlencoded());
// urlencoded data 
// in postman is x-www-from-urlencoded 
// urlencoding -> takes a any non understanbel url text and convert it into sepcial encoding 


//******************************************************** */
// app.get('/' , (req , res) =>{
//     return res.send('hello world');
// });

// app.get('/ping',(req , res)=>{
//     return res.json({message : "hey this is the response"});
//     // console.log(res.body);
//     // console.log(res.query);
//     // this fucntion whaterver u pass will be sended as json obejct

// });

// app.get('/hello' , (req , res) =>{
//     return res.send('fuck u ');
// });
//*********************************************************** */

app.post('/posts',s3uploader.single('image'), createPost);



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