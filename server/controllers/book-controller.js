import Book from "../model/Book.js";

export const getAllBooks = async (req,res)=>{
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error.message);
    }

    if(!books){
        return res.status(404).json({message:"No products found ..."});
    }
    return res.status(200).json({books});
}

export const addBook = async (req,res)=>{
    let book;
    try {
        const {name,author,description,price,available,image} = req.body;
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    } catch (error) {
        console.log(error.message);
    }
    if(!book){
        return res.status(500).json({message:"Unable to add ...."});
    }
    return res.status(201).json({book});
}

export const getById = async (req,res)=>{
    const {id} = req.params;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error.message);
    }
    if(!book){
        return res.status(404).json({message:"No Book found ..."});
    }
    return res.status(200).json({book});
}

export const updateBook = async (req,res)=>{
    const {id} = req.params;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{name,author,description,price,available,image});
        book = await book.save();
    } catch (error) {
        console.log(error.message);
    }
    if(!book){
        return res.status(404).json({message:"Unable to update by this ID ...."});
    }
    return res.status(200).json({book});
}

export const deleteBook = async (req,res)=>{
    const {id} = req.params;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (error) {
        console.log(error.message);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete by this ID ...."});
    }
    return res.status(200).json({message:"Product successfully deleted"});
}