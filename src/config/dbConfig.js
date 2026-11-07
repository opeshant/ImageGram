
// odm or orm -> object document / relational mapper
// these libaraies provide us function which are object oriented function 
// predefined function provided 
// automatically converts the fucntion call to queries




//********** ODM -> SERVER ->  */


import mongoose from "mongoose";
import {DB_URL} from './serverConfig.js';

export default async function connectDB() {
    try{
        await mongoose.connect(DB_URL);
        console.log('connected to mongoDB');
    }
    catch(error){
    console.log('somehting went wrong');
    console.log(error);
    }
}