import React from 'react'  
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => { 
  return(  
    <div> 
<Card sx={{margin:5}}>
 <CardHeader
   avatar={
     <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
       R
     </Avatar>
   }
   action={
     <IconButton aria-label="settings">
       <MoreVert />
     </IconButton>
   }
   title="One Piece"
   subheader="July 25, 2022"
 />
 <CardMedia
   component="img"
   height="550" 
   image="https://pbs.twimg.com/media/FUuc1r_UsAYwm6q?format=jpg&name=large"
   alt="Paella dish"
 />
 <CardContent>
   <Typography variant="body2" color="text.secondary">
     Brand New Action Packed movie One Piece Film "red" comes out in August
   </Typography>
 </CardContent>
 <CardActions disableSpacing>
   <IconButton aria-label="add to favorites"> 
   <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
   </IconButton>
   <IconButton aria-label="share">
     <ShareIcon />
   </IconButton>
 </CardActions>
</Card>
Post 
</div>
 )
} 
export default Post