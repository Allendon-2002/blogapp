import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBar = () => {
  return (
    <div>
        <br /><br />
      <Typography variant="h5" component="h5">
        Add Blog
      </Typography>
      <br />
      <TextField variant="outlined" label= "Blog Name" name='bName'  />
           <br /><br />
      <TextField variant="outlined" label= "Description" name='bDesc'  />
        <br /><br />
      <TextField variant="outlined" label= "Author Name" name='bAuthor'  />
        <br /><br />
        <Button 
  variant="contained" 
  sx={{ backgroundColor: "#1B5E20", color: "white", "&:hover": { backgroundColor: "#0D3B0D" } }}
>
  Post
</Button>

    </div>
  )
}

export default AddBar
