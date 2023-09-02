import express from "express";
import mongoose from "mongoose";
import router from "./routes/book-routes.js";
import cors from "cors";
const app = express();
const DATABASE_URL = "mongodb+srv://kishorekevin3289:A.K.bros@cluster0.z4iqe9j.mongodb.net/bookstoreDB";
const PORT = process.env.PORT || 5000;
app.use(cors());
mongoose.connect(DATABASE_URL)
.then(()=>{
    app.listen(PORT,()=>console.log(`Server started @ port : ${PORT}`));
})
.catch((error)=>console.log(error.message));
app.use(express.json());

app.use("/books",router);
