import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        type: String,
        required : true,
    },
    complete : {
        type : Boolean,
        default: false,
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,//after this referenec is compulsary
        ref : "User",
    },
},{timestamps:true});

export const SubTodo = mongoose.model("Subtodo",subTodoSchema)