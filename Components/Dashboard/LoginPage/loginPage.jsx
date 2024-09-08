import React from 'react';
import {Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle,
    Button,
    IconButton, 
    Grid, 
    Typography,
    Box,
    TextField,
   }from '@mui/material';
import {useForm} from 'react-hook-form'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';   
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import {setLogIn} from '../../store/slices/logInSlice';
import axios from 'axios';

const schema=yup.object().shape({
    username:yup.string().matches('Kurt').required("username is Required"),
    password:yup.string().matches('435-262-3705').required("password is Required")
});
function LoginPage({onClose}) {
  const dispatch=useDispatch();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });
    
    const hasFormSubmit=async(data,e)=>{
       console.log(data.username,data.password,"getD")
       e.preventDefault();
       const userData = {
         email: data.username,
         password: data.password
       };
      try {
        const response = await axios.post(`https://6332cfeda54a0e83d25909d3.mockapi.io/api/v1/users`, userData);
        console.log(response,"response");
  
      } catch (error) {
        console.log(error);
        // if (error.response) {
        //   console.log(error.response);
        //   console.log("server responded");
        // } else if (error.request) {
        //   console.log("network error");
        // } else {
        //   console.log(error);
        // }
      }
    
  
      dispatch(setLogIn())
      onClose()
    }
   
    return (
        <Dialog
          open={true}
          onClose={onClose}
          aria-labelledby="responsive-dialog-title"
        >
        <DialogTitle sx={{fontSize:'15px'}}>
          {"Login"}
        </DialogTitle>
  
       <form onSubmit={handleSubmit(hasFormSubmit)}>
        <DialogContent>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <br/>

        <Box sx={{height:'200px', width:'280px'}}>
         <Grid container>
         <Grid item md={12} sm={12} xs={12}>
            <Typography sx={{fontSize:'12px'}}>
                Email ID
            </Typography>
         <TextField
          id="outlined-multiline-flexible"
          className='form-control'
          size="small"
          variant="outlined"
          fullWidth
          control={control}
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
         </Grid>
         </Grid>
         <br/>
         <Grid container>
         <Grid item md={12} sm={12} xs={12}>
            <Typography sx={{fontSize:'12px'}}>
                Password
            </Typography>
         <TextField
           id="outlined-multiline-flexible"
           size="small"
           fullWidth
           variant="outlined"
           control={control}
           {...register('password')}
           error={!!errors.password}
           helperText={errors.password?.message}
        />
         </Grid>
         </Grid>
        </Box>
        </DialogContent>
         <Button 
          type='submit'
          // onClick={()=>handleAddToCart(el.id)} 
          fullWidth
          sx={{background:'black', color:'whitesmoke', margin:'10px', height:'22px',width: '91%',
          "&:hover":{background:'black', color:'whitesmoke'}}}      
         >
           login
         </Button>
        </form> 
        <DialogActions>
        </DialogActions>
      </Dialog>
      )
}

export default LoginPage;
