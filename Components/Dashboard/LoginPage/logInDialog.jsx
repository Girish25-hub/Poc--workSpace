import React from 'react';
import {
    Grid, 
    Typography,
    Box,
    Avatar,
    Popover 
   }from '@mui/material'; 
   import { useDispatch } from 'react-redux';
   import {setLogIn} from '../../store/slices/logInSlice';

function LogInDialog({onClose}) {
  const dispatch=useDispatch();
    const handleLoginUserDetails=()=>{
      dispatch(setLogIn())
      onClose()
    }
    return (
        <Popover 
          open={true}
          onClose={onClose}
          aria-labelledby="responsive-dialog-title"
          anchorOrigin= {{vertical:'top', horizontal: 'right'}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          anchorPosition={{ top: '250px', left: '700px' }}
        >
         <br/>
        <Box sx={{height:'50px', width:'220px',padding:'3px'}}>
         <Grid container>
         <Grid item md={12} sm={12} xs={12}>
         <Grid container>
         <Grid item md={3} sm={3} xs={3}>
         <Avatar>K</Avatar>
         </Grid>
         <Grid item md={9} sm={9} xs={9}>
           <Typography  sx={{fontSize:'12px'}}>
             Iliana_Gerhold9@gmail.com
           </Typography>
         </Grid>
         </Grid>
         </Grid>
         </Grid>
        </Box>
        <Box onClick={handleLoginUserDetails} 
          sx={{height:'30px', width:'220px',backgroundColor:'#a41f84',color:'whitesmoke',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <Typography sx={{fontSize:'12px'}}>
           LOGOUT
         </Typography>
        </Box>
      </Popover >
     )
}

export default LogInDialog;
