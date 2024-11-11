import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect("mongodb+srv://arpan:arpan001@taskmanagement.9kh8m.mongodb.net/?retryWrites=true&w=majority&appName=taskmanagement")
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon