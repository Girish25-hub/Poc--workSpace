import React from 'react';
import {Dialog, 
    DialogActions, 
    DialogContent, 
    Button,
    IconButton, 
    Grid,  
    Box,
    Card,
    CardMedia,
    Typography,
   }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import {removeItem} from '../../store/slices/userSlice';

function CartPage({onClose, cartItem}) {
  const dispatch=useDispatch();

  const handleRemove=(id)=>{
    dispatch(removeItem(id))
  }
  return (
    <div>
    <Dialog
    open={true}
    onClose={onClose}
    aria-labelledby="responsive-dialog-title"
  >
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
    {cartItem.length!==0?cartItem?.map(el=>
    <Grid container maxWidth={500}>
     <Grid item md={12} sm={12} xs={12}>
      <Grid container>
       <Grid item md={4} sm={4} xs={4} sx={{padding:'15px'}}>
        <Card >
          <CardMedia
          component="img"
          sx={{ height:'80px',width:'120px'}}
          image={el.pdtImg}
          alt="Live from space album cover"
          /> 
         </Card>
       </Grid>
       <Grid item md={4} sm={4} xs={4} sx={{padding:'15px'}}>
            <Box >
            <Box sx={{fontWeight:'bold',fontSize:'12px'}}>
            {el.pdtName}
            </Box>
            <Box sx={{fontSize:'10px'}}>
            {el.pdtCategory}
            </Box>
            <Box sx={{fontWeight:'bold', color:'#1791DB',fontSize:'12px'}}>
             $ {el.pdtPrice}
            </Box>
            <Box sx={{fontSize:'10px', display:'flex', direction:'row'}}>
              <Box sx={{height:'15px', width:'15px',border:'1px solid black', background:el.color}} ></Box> 
                &nbsp; {el.color}
              </Box>
            </Box>
       </Grid>
       <Grid item md={4} sm={4} xs={4} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <Typography 
          onClick={()=>handleRemove(el.id)} 
          sx={{padding:'15px', color:'#BF2290',fontSize:'12px',display:'flex', justifyContent:'center', alignItems:'center'}}
        >
          Remove
        </Typography>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
    ) :(
      <Box    
       sx={{background:'#feedf5', color:'black',margin:'15px', height:'82px',width:'auto',display:'flex',justifyContent:'center', alignItems:'center'}}>
       <Typography sx={{padding:'10px'}}>
        No Item Added in Cart.
       </Typography>
      </Box>)}
    </DialogContent>
      <Button 
       onClick={onClose} 
       sx={{background:'black', color:'whitesmoke' ,margin:'10px', height:'22px',width:'auto', 
        "&:hover":{background:'black', color:'whitesmoke'}}}
     >
         Checkout
      </Button>
    <DialogActions>
    </DialogActions>
  </Dialog>
</div>
  )
}

export default CartPage;
