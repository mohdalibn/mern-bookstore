import mongoose from "mongoose";

// Schema For the book model
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);


export const Book = mongoose.model('Cat', bookSchema);