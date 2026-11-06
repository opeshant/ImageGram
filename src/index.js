import express from 'express';

// express module returns a function
// express is a function 

const PORT = 3000;
const app = express(); // sever object


// callback is excuted when server is runnig fine

app.get('/' , (req , res) =>{
    return res.send('hello world');
});

app.get('/ping',(req , res)=>{
    return res.json({message : "hey this is the response"});
    // this fucntion whaterver u pass will be sended as json obejct

});

app.get('/hello' , (req , res) =>{
    return res.send('fuck u ');
});
// similar to the basic http.createService we builtin 


// in express u can define in the sepicifc url how will be ur req and the res will be done 

app.listen(PORT , ()=>{

})