const express = require("express");
const Book = require("../models/Book")

const router = express.Router();


// Create - POST

router.post("/", async (req, res)=>{
    try{
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook)

    }catch(error){
        res.status(400).json({error: error.message})

    }
})

// Get ALL Books

router.get("/", async (req, res)=>{
    try{
        const books = await Book.find();
        res.json(books);

    }catch(error){
        res.status(500).json({error: error.message})
    }
})

//  GET /:id

router.get("/:id", async (req, res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.json(book);

    }catch(error){
        res.status(500).json({error: error.message})   
    }
})


// UPDATE - PUT /:id

router.put("/:id", async (req, res)=>{
    try{

        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true})
            if (!updateBook) return res.status(404).json({ error: 'Book not found' });
    
        res.json(updateBook);
    }catch(error){
        res.status(500).json({ error: error.message })
        
    }
})


// DELETE - DELETE /:id

router.delete("/:id", async (req, res)=>{
    try{

        const deleteBook = await Book.findByIdAndDelete(
            req.params.id)
            if(!deleteBook) 
                return res.status(404).json({error: "Book not found"})
            res.json({message:"Book deleted successfully"})

    }catch(error){
        res.status(500).json({ error: error.message })
        
    }
})

module.exports = router