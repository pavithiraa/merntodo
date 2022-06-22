const mongoose = require("mongoose");

const db= mongoose.connect(
  "mongodb+srv://pavi:010320@cluster0.0imp0.mongodb.net/todolist?retryWrites=true&w=majority",
  err=>{
    if(err){
        console.log(err);
    }
    console.log(`mongodb connected successfully`);
  }
);

module.exports= db
