import React,{useState} from 'react';
import {Grid,
  Pagination,
  Card,CardActions,CardContent, CardMedia ,Typography, Link,TextField} from '@mui/material';
import './productCard.css';
import AddCartDialog from './addCartDialog';
// import Pagination from '../Pagination';

function ProductCard({prodData}){
  //console.log(prodData,"prodData")
  const[page,setPage]=useState(1)
  const[count,setCount]=useState(6)
  const[open,setOpen]=useState(false)
  const[cartData,setCartData]=useState([])
  const[search,setSearch]=useState('')

  // const items=Array.from({length:63},(_,index)=>index);
  // const itemsPerPage=6;
  // console.log(search,"searh")
  const last=page*count;
  const first=last-count;
  const values=prodData.filter(prod=>prod.pdtName.toLocaleLowerCase().includes(search)).slice(first,last);
  const btnCount=[]
  for(let i=1; i<Math.ceil(prodData.length/count);i++){
    btnCount.push(i)
  }

  // -------  inputFilter ----
  const handleClick=(cId)=>{
    const filterData= prodData.filter(el=>el.id===cId)  
    setCartData(filterData)
    setOpen(true)
  }
  const handleinputChange=(e)=>{
      
  }
  

  //console.log(prodData.filter(prod=>prod.pdtName.toLocaleLowerCase().includes(search) ),"filteritem")
  return (
    <div>
      {open && <AddCartDialog cData={cartData} onClose={()=>setOpen(false)}/>}
         <Grid container spacing={1}>
           <Grid item md={9} sm={9} xs={9}>
            <Grid container>
            <Grid item md={8} sm={8} xs={12}>
              <TextField
               size="small"
                // sx={{width:'400px', height:'5px'}}
                   id="outlined-size-small"
                   fullWidth 
                   onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}  
                   placeholder='Search for Product...'
              /> 
             </Grid> 
             </Grid>
           </Grid>
           <Grid item md={3} sm={3} xs={3}>
           <Grid container>
           <Grid item md={9} sm={9} xs={12}>
             <Pagination 
              count={2} 
              size='small' 
              variant='outlined' 
              color="primary" 
              defaultPage={btnCount} 
              onChange={(event,value)=> setPage(value)}
              />
              {/* <Pagination
               items={items}
               itemsPerPage ={itemsPerPage}
              /> */}
            </Grid>
            </Grid>
           </Grid>
          </Grid>
          <Grid container spacing={1}>
             {values.map(ele=>
           <Grid item md={4}>
            <br/>
           <Card >
             <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image={ele.pdtImg}
             />
      
           <CardContent >
            <Typography 
             gutterBottom 
             variant="h55" 
             sx={{fontSize:'15px', display:'flex',justifyContent:'center'}} 
             component="div"
             >
              {ele.pdtName}
            </Typography>
            <Typography 
             sx={{fontSize:'10px',display:'flex',justifyContent:'center'}} 
             variant="body3" 
             color="text.secondary"
             >
             {ele.pdtCategory}
            </Typography>
           </CardContent>
           <CardActions >
            <Grid container spacing={11}   >
              <Grid item md={6} sm={5} xs={5}>
               <Typography 
                sx={{fontSize:'10px', fontWeight:'bold'}}
                >
                $ {ele.pdtPrice}
               </Typography>
              </Grid>
              <Grid item md={6} sm={7} xs={7}  
                sx={{display:'flex', direction:'row', justifyContent:'flex-end', alignItems:'center'}}
              >
              <Link 
               sx={{fontSize:'10px', color:'#BF2290',fontWeight:'bold'}} 
               color="inherit" 
               onClick={()=>handleClick(ele.id)} 
              >
                ADD TO CART
              </Link>
              </Grid>
            </Grid>
           </CardActions>
          </Card>
          <br/>
         </Grid>)}
        </Grid>
    </div>
   
  )
}

export default ProductCard;
