const mongoose = require('mongoose')
const { title } = require('process')
const { Schema } = mongoose

// create the new schema for Books

const bookSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: [true, "Title is required"],
    },
    author:{
        type: String,
        required: [true, "Author is required"],
    },
    isbn: {
        type: String,
        required: [true, "isbn is required"],
        unique: true,
    },
    PublishedDate:{
        type: Date

    },
    instock:{
        type: Boolean,
        default: true
    }

})
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;