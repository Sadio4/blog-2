import { Mail, NotificationAdd, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";  

const StyledToolbar = styled(Toolbar)({ 
    display: "flex", 
    justifyContent: "space-between",
}); 

const Search = styled("div")(({theme})=>({ 
backgroundColor:"white", 
padding:"0 10px",
borderRadius: theme.shape.borderRadius, 
width: "40%",
}));

const Icons = styled("div") (({ theme }) => ({ 
    display: "none" , 
    alignItems:"center", 
     gap:"20px", 
    [theme.breakpoints.up("sm")]:{ 
        display: "flex"
    }
    }));  

     const UserBox = styled("div") (({ theme }) => ({ 
        display: "flex" , 
        alignItems:"center", 
         gap:"10px",
         [theme.breakpoints.up("sm")]:{  
            display: "none"
         }
            
        }));  
    
const Navbar = () => {  
   const [open,set0pen] = useState(false)
    return ( 
       <AppBar position="sticky"> 
        <StyledToolbar>
         <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}> 
         LAMA DEV 
         </Typography>  
         <Pets sx={{display:{xs:"block", sm:"none"} }}/> 
         <Search><InputBase placeholder="search..."/></Search> 
        <Icons> 
    <Badge badgeContent={4} color="error">
       <Mail/>
     </Badge>  
     <Badge badgeContent={2} color="error">  
     <NotificationAdd/>
     </Badge> 
     <Avatar sx={{width:30, height: 30}}  
     src="https://onepiece.fandom.com/wiki/Monkey_D._Luffy?file=Monkey+D.+Luffy+Anime+Post+Timeskip+Infobox.png"  
      onClick={e=>set0pen(true)} 
      />
    </Icons> 
    <UserBox onClick={e=>set0pen(true)}>
    <Avatar sx={{width:30, height: 30}}  
    src="https://onepiece.fandom.com/wiki/Monkey_D._Luffy?file=Monkey+D.+Luffy+Anime+Post+Timeskip+Infobox.png"/>  
    <Typography variant="span">Monkey D. Luffy</Typography>
    </UserBox>
        </StyledToolbar>  
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} 
        onClose={e=>set0pen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem> 
        <MenuItem > My account</MenuItem> 
        <MenuItem >Logout</MenuItem>
      </Menu>
       </AppBar> 
    )
    } 

export default Navbar