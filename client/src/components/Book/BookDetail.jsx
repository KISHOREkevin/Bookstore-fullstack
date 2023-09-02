import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
  const [inputs,setInputs] = useState({});
  const [checked,setChecked] = useState(false);
    const {id} = useParams();
    const history = useNavigate();
    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/books/${id}`).then(res =>res.data).then(data =>setInputs(data.book));
        };
        fetchHandler();
    },[id]);
    const sendRequest = async ()=>{
      await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(inputs.name),
        description:String(inputs.description),
        price:Number(inputs.price),
        author:String(inputs.author),
        image:String(inputs.image),
        available:Boolean(checked)
      }).then(res => res.data);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRequest().then(()=>history("/books"));
    }
    const handleChange = (e)=>{
      const {name,value} = e.target;
      setInputs((prevState)=>({
          ...prevState,
          [name]:value
          
      }))
    }
    
  return (
    <div>
      {inputs && (<form onSubmit={handleSubmit}>
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
          Update Book
        </Button>
      </Box>
    </form>)} 
    </div>
  )
}

export default BookDetail