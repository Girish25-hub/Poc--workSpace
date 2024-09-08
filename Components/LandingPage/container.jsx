import React,{useState,useEffect} from 'react';
import {Grid,Paper }from '@mui/material';
import axios from 'axios';
import ProductCard from '../Dashboard/Cards/productCard';
import SideBar from '../Dashboard/Sidebar/sideBar';
import {fetchApi} from '../store/slices/apiSlice';
import { useDispatch,useSelector } from 'react-redux';

function Container() {
 const dispatch = useDispatch();

  const[productData,setProductData]=useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const getProductData=()=>{
    let url = 'https://6332cfeda54a0e83d25909d3.mockapi.io/api/v1/products'
    let res= axios.get(url)
    .then(response => {
      setProductData(response.data);
      setFilteredItems(response.data);
    })
    .catch(error => {
      console.error(error);
    });
   return res;
 }

  useEffect(() => {
    getProductData()
  }, []);
  
  const selectedColors=useSelector((state)=>state.filter )
  const selectedBrands=useSelector((state)=>state.brands )
  const selectedTypes=useSelector((state)=>state.types )
  let brands = selectedBrands.map((selectedCategory)=>selectedCategory )
  let types = selectedTypes.map((selectedCategory)=>selectedCategory )
  let colors = selectedColors.map((selectedCategory)=>selectedCategory )

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const getUniqueListBy=()=>{
    return [...new Set(productData.map(el=>el.pdtName))]
  }
  const getUniqueColor=()=>{
    return [...new Set(productData.map(el=>el.color))]
  }
  const getUniqueType=()=>{
    return [...new Set(productData.map(el=>el.pdtType))]
  }

const filterItem = (brands) => {
  if (brands.length > 0) {
    // console.log(brands ,"hi");
      let tempBrands = productData.filter((item)=> brands.includes(item.pdtName ));
      // console.log(tempBrands,"tempBrands");
      setFilteredItems(tempBrands);
  } else {
    setFilteredItems([...productData]);
  }
};

const filterColor = (colors) => {
  if (colors.length > 0) {
    console.log(colors ,"tempC");
      let tempColors = productData.filter((item)=> colors.includes(item.color ));
      console.log(tempColors,"tempColors");
      setFilteredItems(tempColors);
  } else {
    console.log(colors ,"tempC");
    setFilteredItems([...productData]);
  }
};

const filterType = (types ) => {
  if (types.length > 0) {
      let tempType = productData.filter((item)=> types.includes(item.pdtType ));
      // console.log(tempType ,"tempType");
      setFilteredItems(tempType);
  } else {
    setFilteredItems([...productData]);
  }
};

useEffect(() => {
  filterItem(brands)
}, [selectedBrands]);

useEffect(() => {
  filterType(types )
}, [selectedTypes]);

useEffect(() => {
  filterColor(colors)
}, [selectedColors]);

  return (
  <>
     <Grid container spacing={1}
      >
        <Grid item md={3} sm={3} xs={3}>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
            <Paper>
             <SideBar sideBarData={getUniqueListBy()} uniqueColor={getUniqueColor()} uniqueType={getUniqueType()}/>
             {/* <div sx={{width:'10px',height:'500px',background:'white',}}></div> */}
            </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={9} sm={9} xs={9}>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
             {/* <Paper sx={{padding:'20px', border:'1px solid red'}}> */}
             <Paper  sx={{padding:'20px'}}>
              <ProductCard prodData={filteredItems}/>
             </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  </>
  )
}

export default Container;
