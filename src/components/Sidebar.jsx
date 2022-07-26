import { Home, ModeNight, } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'   
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'; 
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded'; 
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'; 
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded'; 
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'; 




const Sidebar = () => { 
    return ( 
       <Box  
       flex={1} 
       p={2}  
       sx={{ display: { xs: "none", sm: "block"}}}>
       <Box position="fixed">
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>   
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <ArticleRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" /> 
            </ListItemButton>
          </ListItem>    
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <SupervisorAccountRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>    
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <StorefrontRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>    
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <PersonRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>    
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <SettingsRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>   
           <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <PersonPinRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>    
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon> 
                <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>   
          
          </List>
       
          </Box>
       
       </Box> 

    )
    } 

export default Sidebar