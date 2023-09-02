import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Button LinkComponent={Link} to="/books" variant='contained' sx={{marginTop:15,backgroundColor:"orangered"}}>
        <Typography variant='h3'>View All Products</Typography>
      </Button>
    </Box>
  )
}

export default Home