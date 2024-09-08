import React,{useState} from 'react'
import {Grid, Typography, Box,Checkbox,FormControlLabel } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch,useSelector } from 'react-redux';
import {setColor} from '../../store/slices/filterSlice';
import {setBrand} from '../../store/slices/brandSlice';
import { setType } from '../../store/slices/typeSlice';
import './sideBar.css';

function SideBar({sideBarData,uniqueColor,uniqueType}) {
  const dispatch=useDispatch();
  const [isChecked, setIsChecked]=useState([])

  // const myData=useSelector((state)=>state.filter )
  // console.log(myData,"color")
  // const myData1 =useSelector((state)=>state.brands )
  // console.log(myData1," brands")

  // const myData2 =useSelector((state)=>state.types )
  // console.log(myData2," types")

  const handleBoxColor=(el)=>{
    dispatch(setColor(el))
  }

  const clearCheckBox=(e)=>{
   
    // setGetCheckedValue(
    //   getCheckedValue.filter((ele)=>(ele === ) )
    // );
  }
  const handleCheckbox=(e,value)=>{
    dispatch(setBrand(e.target))
    // setIsChecked(e.target.value)
  }
  const handleRadio=(e)=>{
    dispatch(setType(e.target))
  }

  return (
    <div className='sidebar' >
     <Grid container spacing={1}>
        <Grid item md={12}>
        <br />
        <br />
        <Typography sx={{color:'#008080', fontWeight:'bold', fontSize:'12px'}}>
            FILTERS
        </Typography>
        </Grid>
        </Grid>
        <br/>
      <Grid container >
        <Grid item md={12}>
          <Typography sx={{ fontSize:'12px'}}>
            COLORS
          </Typography>
         </Grid>
        </Grid>
        <Grid container >
         {uniqueColor?.map(el=>
         <Grid item md={1} sm={1} xs={1}>
           <Box 
            onClick={(e)=>handleBoxColor(el)} 
            sx={{margin:'1px',height:'12px', width:'12px',border:'1px solid black', 
            background:el
            }}>
          </Box> 
         </Grid>
          )}      
         </Grid>
          <br/>

        <Grid container >
         <Grid item md={6} sm={6} xs={6}>
         <Typography sx={{ fontSize:'12px'}}>  
            BRANDS
          </Typography>
         </Grid>
         <Grid item md={6} sm={6} xs={6}>
          <Typography 
          onClick={(e)=>clearCheckBox(e)} 
          sx={{fontSize:'12px',color:'#CC0066',display:'flex', justifyContent:'flex-end'}}
          >
             Clear All
          </Typography>
         </Grid>
        </Grid>

        <Grid container >
        <Grid item md={12} sm={12} xs={12}>
          <Box id='box-scroll' sx={{ fontSize:'12px'}}>
           {sideBarData?.map((el)=>
            <Grid container >
             <Grid 
               item 
               md={9} 
               sm={9} 
               xs={9} 
               sx={{display:'flex',justifyContent:'flex-start'}}
             >
               {el}
             </Grid>
             <Grid item md={3} sm={3} xs={3} sx={{display:'flex',justifyContent:'center' }}>
              <Checkbox  
                 label="Check this box"
                 value={el}
                 
                //  checked={myData1.includes(isChecked)}
                //  checked={getCheckedValue === el}
                
                 onChange={handleCheckbox}
                 sx={{
                  paddingTop:'2px',
                  color:'grey',
                  '&.Mui-checked': {
                    color: '#36c7c9',
                  },
                  '& .MuiSvgIcon-root': { fontSize: 18 }
               }}/>
            
            </Grid>
            </Grid>)}
          </Box>
        </Grid>
        </Grid>
        <br/>

        <Grid container>
        <Grid item md={12}>
        <Typography sx={{ fontSize:'12px'}}>
            TYPE
        </Typography>
        </Grid>
        </Grid>

        <Grid container>
         <Grid item md={12} sm={12} xs={12}>
          <Box id='box-scroll'  sx={{ fontSize:'12px'}}>
          {uniqueType?.map(el=>
          <Grid container>
           <Grid 
            item 
            md={7} 
            sm={7} 
            xs={7}
            sx={{display:'flex',justifyContent:'flex-start'}}
           >
            {el}
           </Grid>
           <Grid 
            item 
            md={5} 
            sm={5} 
            xs={5}
            sx={{display:'flex',justifyContent:'flex-end'}}
           >
          <FormControlLabel
           control={
            <Checkbox 
             icon={<RadioButtonUncheckedIcon sx={{ fontSize: 10 }}  />} 
             checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 10 }} />} 
             value={el}
            //  checked={isChecked}
             onChange={handleRadio}
             sx={{
              paddingTop:'2px',
              color:'grey',
              '&.Mui-checked': {
                color: '#36c7c9',
              },
              '& .MuiSvgIcon-root': { fontSize: 18 }
             }}
            />
           } 
          />
           </Grid>
          </Grid>
         )}
          </Box>
         </Grid>
        </Grid>
        <br/>
        <br/>
    </div>
  )
}

export default SideBar;
