import React from 'react';
import Header from './header';
import Container from './container';
import "./Styles/index.css";

function index() {
  return (<>
  <div className='main'>
    <div className='header'>
     <Header/>
    </div>
    <div className='container'>
    <Container />
    </div>
  </div>
 </>)
}

export default index
