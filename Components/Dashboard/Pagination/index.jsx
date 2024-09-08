import React, { useState } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Pagination=({items,itemsPerPage})=>{
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem= currentPage*itemsPerPage;
    const indexOfFirstItem= indexOfLastItem-itemsPerPage;
    const currentItems= items.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages=Math.ceil(items.length/itemsPerPage);

    const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
    };

    console.log(currentItems,"currentPage");
    
    return(<div>
        <ul>
            {currentItems.map((item,index)=>(
                <li key={index}>
                  {item}
                </li>
            ))}
        </ul>
    <div>
    {Array.from({length:totalPages},(_,index)=>(
      <KeyboardDoubleArrowLeftIcon key={index+1} onClick={()=>handlePageChange(index+1)}
       disabled={currentPage===index+1}
      >
      {index+1}
     </KeyboardDoubleArrowLeftIcon>  
    ))}  
    </div>
</div>
);
};

export default Pagination;
