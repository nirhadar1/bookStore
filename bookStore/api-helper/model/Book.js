import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {
        type: String,
        requiered: true
    },
    author: {
        type: String,
        requiered: true
    },
    price: {
        type: Number,
        requiered: true
    },
    imageUrl: {
        type: String,
        requiered: true
    },
    featured: {
        type: Boolean  
    }
});

export default mongoose.models.Book || mongoose.model("Book",bookSchema);