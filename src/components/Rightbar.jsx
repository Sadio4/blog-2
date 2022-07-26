import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, Typography } from '@mui/material'
import React from 'react' 
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const Rightbar = () => { 
    return ( 
       <Box 
       flex={2}
        p={2} 
        sx={{ display: { xs: "none", sm: "block"}}}> 
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography> 
        <AvatarGroup max={7}>
  <Avatar alt="Roronoa Zoro" src="https://otakukart.com/wp-content/uploads/2022/03/Zoro-e1647158759503.jpg" />
  <Avatar alt="Shanks" src="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/02/One-Piece-Red-Haired-Shanks.jpg?w=640ssl=1" />
  <Avatar alt="Sanji" src="https://staticg.sportskeeda.com/editor/2022/03/e5a1b-16487500456711-1920.jpg" />
  <Avatar alt="Nico Robin" src="https://otakukart.com/wp-content/uploads/2021/09/Nico-Robin-1.png" />
  <Avatar alt="Gol D Roger" src="https://otakukart.com/wp-content/uploads/2021/10/gol-f-smritip.jpg" />
</AvatarGroup> 
<Typography variant='h6' fontWeight={100}>  
Latest Photos
</Typography> 
      <ImageList cols={3} rowHeight={100} gap={5} mt={2} mb={2}> 
        </ImageList> 
        <img   
        src="https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpgi"   
        alt="" 
         />  
        <ImageListItem>         
        </ImageListItem>
      <img  
      src="https://staticc.sportskeeda.com/editor/2022/07/7dbec-16577287911171-1920.jpg" 
      alt="" 
      height="100"
      width="145"

      /> 
      <img 
      src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/02/Yonko-Kaido-Facts-Featured.jpg" 
      alt="" 
      height="100"
      width="145"

      />  
      
      <img 
      src="https://static.wikia.nocookie.net/onepiece/images/d/d8/Charlotte_Linlin_Anime_Infobox.png" 
      alt="" 
      height="100" 
      width="145" 
      

      />
        <Box position="fixed"> 
        <ImageList> 
        </ImageList> 
        <Typography variant='h6' fontWeight={100}>  
Latest Conversations
</Typography>  
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kaido King of Beasts" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Who is in Wano"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Monkey D. Luffy
              </Typography>
              {" — Kaido I will be in Wano soon…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Nico Robin" src="https://static.wikia.nocookie.net/ultimatepopculture/images/3/3d/Robin_f.JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Where is the famous weapon Pluton?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kozuki Sukiyaki
              </Typography>
              {" —It is in Wano …"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gol D Roger"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — I heard Whitebeard…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box> 
        </Box> 
        
    )
    } 

export default  Rightbar