import React,{useState} from 'react'
import {Button,Stack,Badge,Chip, Avatar } from '@mui/material';
import CartPage from '../../Dashboard/Cart/cartPage';
import LoginPage from '../../Dashboard/LoginPage/loginPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../../store/slices/apiSlice';
import LogInDialog from '../../Dashboard/LoginPage/logInDialog';

const styles={
    color:'whitesmoke',
    fontFamily:'Monospace' ,
    fontWeight: 'normal',
     "&:hover":{ fontWeight: 'bold'},
  boxs:{
    color:'yellow',
    fontFamily:'Monospace' ,
    fontWeight: 'normal',
    bordarRedius:'25px',
    "&:hover" :{color:"warning",fontWeight: 'bold'} ,
  },
    logIn:{
    color:'rgb(213,11,132)',
    background:'white',
    fontFamily:'Monospace' ,
    fontWeight: 'normal',
     "&:hover":{ fontWeight: 'bold',background:'white',},  
  } 
} 

function NavBar() {
  const dispatch=useDispatch();
  const[openCart,setOpenCart]=useState(false);
  const[loginPage,setLoginPage]=useState(false);
  const[logInDialog, setLogInDialog]=useState(false);

  const apiData=useSelector((state)=>state.userApi.data )
  
  const isLog= useSelector((state)=>state.loginLogout.value.isLogIn )
  console.log(isLog,"isLog")

  const numbOfCart=useSelector((state)=>{
    return state.users;
  })

  const handleCartClick=()=>{
    dispatch(fetchApi())
    setOpenCart(true)
  }
  const handleLogin=()=>{
    setLoginPage(true)
  }
  const handleLoginDialog=()=>{
    setLogInDialog(true)
  }
  const cartItemList=()=>{
    return apiData?.filter(({ id }) => numbOfCart?.includes(id));
  }
  
  // const cartItem=apiData.filter(({ id }) => numbOfCart.includes(id));
  return (
    <div>
    {openCart && <CartPage onClose={()=>setOpenCart(false)} cartItem={cartItemList()}/>}
    {loginPage && <LoginPage onClose={()=>setLoginPage(false)}/>} 
    {logInDialog && <LogInDialog setLogInDialog={setLogInDialog} onClose={()=>setLogInDialog(false)}/>} 

      <Stack direction="row" spacing={3} >
      <Button  sx={styles} > Home </Button>
      <Button  sx={styles} > Product </Button>
      <Button  sx={styles} > About Us </Button>
      <Button  sx={styles} > Contact Us </Button>
       <Badge badgeContent={numbOfCart.length} color="warning">
        <Button  sx={styles.boxs} onClick={handleCartClick} >Cart</Button>
       </Badge>
       {isLog?
       <Chip label="LOGIN" sx={styles.logIn} variant="outlined"  onClick={handleLogin}/>
        :
       <Avatar sx={{ bgcolor: 'whitesmoke', color:'black'}} onClick={handleLoginDialog}>K</Avatar>
      }
      
    </Stack>
  </div>
  )
}

export default NavBar
