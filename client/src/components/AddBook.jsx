import {
  Box,
  Button,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const AddBook = () => {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: 0,
    author: "",
    image: "",
  });
  const [checked,setChecked] = useState(false);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputs((prevState)=>({
        ...prevState,
        [name]:value
        
    }))
  }
  const sendRequest = async()=>{
   await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      description:String(inputs.description),
      price:Number(inputs.price),
      author:String(inputs.author),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"));
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          onChange={handleChange}
          value={inputs.name}
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          value={inputs.description}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          value={inputs.price}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />}
          label="Available"
        />
        <Button type="submit" variant="contained">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
