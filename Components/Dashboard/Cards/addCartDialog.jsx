import React from 'react'
import {Dialog, 
        DialogActions, 
        DialogContent, 
        Button,
        IconButton, 
        Grid, 
        Typography,
        CardMedia,
        Box,
        Card
       }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice';

function AddCartDialog({onClose,cData}) {
  const dispatch=useDispatch();

  const handleAddToCart=(id)=>{
    dispatch(addUser(id))
    onClose()
   
  }
  return (
        <div>
        <Dialog
        open={true}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "500px", 
              },
            },
          }}
        >
       {cData.map(el=>
        <div>
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
       
        <Grid container maxWidth={500}>
         <Grid item md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
           <Grid item md={5} sm={5} xs={5}>
            <Card>
             <CardMedia
              component="img"
              sx={{ height:'130px',width:'250px' }}
              image={el.pdtImg}
              alt="Live from space album cover"
             /> 
            </Card>
           </Grid>
           <Grid item md={7} sm={7} xs={7}>
            <Box>
              <Box sx={{fontWeight:'bold'}}>
               {el.pdtName}
              </Box>
              <Box sx={{fontSize:'12px'}}>
               {el.pdtCategory}
              </Box>
              <Box sx={{fontWeight:'bold', color:'#2E86C1',pt:'10px'}}>
               $ {el.pdtPrice}
              </Box>
              <br/>
              <Grid container>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container >
                <Grid item md={1} sm={1} xs={1}>
                <Box sx={{height:'17px', width:'17px',border:'1px solid black', background:el.color}}>
                </Box>
                </Grid>
                <Grid item md={11} sm={11} xs={11}>
                 {el.color}
                </Grid>
               </Grid>
              </Grid>
              </Grid>
            </Box>
           </Grid>
          </Grid>
          <Box sx={{fontSize:'12px',background:'#F4F6F8',marginTop:'10px'}}>
          <Grid container>
            <Grid item md={4} sm={4} xs={4}>
            <Typography sx={{color:'#CC17DB', fontSize:'14px'}}>
              Descriptions
            </Typography>
            </Grid>
            <Grid item md={8} sm={8} xs={8}>
             <Typography sx={{fontSize:'14px'}}>
              Reviews
             </Typography>
            </Grid>
           </Grid>
           <Box sx={{height:'.5px',background:'#808B96 ',marginTop:'10px'}}></Box>
          </Box>
          <Grid container >
           <Grid item md={12} sm={12} xs={12}>
            <Typography  sx={{fontSize:'11px',marginTop:'10px'}}>
             {el.pdtDescription} 
            </Typography>
           </Grid>
          </Grid> 
          <br/>
          <Grid container  >
           <Grid item md={12} sm={12} xs={12}>
            <Typography  sx={{fontSize:'11px'}}>
             UID:  {el.pdtUID} 
            </Typography>
           </Grid>
          </Grid>
          <br/>
          <Grid container >
           <Grid item md={12} sm={12} xs={12}>
            <Typography  sx={{fontSize:'11px'}}>
             Code:  {el.pdtCode} 
            </Typography>
           </Grid>
          </Grid>
          <br/> 
          <Grid container >
           <Grid item md={12} sm={12} xs={12}>
            <Typography  sx={{fontSize:'11px'}}>
             Type:  {el.pdtType} 
            </Typography>
           </Grid>
          </Grid>
          <br/>  
         </Grid>
        </Grid>
        </DialogContent> 
         <Button 
          onClick={()=>handleAddToCart(el.id)} 
          fullWidth
          sx={{background:'black', color:'whitesmoke', margin:'10px', height:'22px',width: '96%',
          "&:hover":{background:'black', color:'whitesmoke'}}}      
         >
           Add to Cart
         </Button>  
        <DialogActions>
        </DialogActions>
          </div>
         )}
      </Dialog>
      </div>
  )
}

export default AddCartDialog;
