import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography sx={{fontFamily:"fantasy",fontWeight:"bold"}} variant='h2'>This is a CRUD application </Typography>
      <Typography variant='h3'>using MERN</Typography>
    </Box>
  )
}

export default About