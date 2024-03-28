import mongoose  from "mongoose";

const todoSchema =  new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId, //  after this reference is required
        ref : "User", // this ref must be same as model name [ie: mongoose.model("User",userSchema)] , this USER goes there
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ] // becoz type of subTodos is array, and it contains objects inside it, so we must also define the type of object
},{timestamps : true})

export const Todo = mongoose.model("Todo",todoSchema);