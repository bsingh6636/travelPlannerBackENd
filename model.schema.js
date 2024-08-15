import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    placeName : {
        type : String,
        required : true
    },
    imageUrl :{
        type : String , 
        required : true
    },
    placeDetails:{
        type:String,
        required : true,
    }
},{timestamps:true})

export const Place = mongoose.model('Place',placeSchema)
