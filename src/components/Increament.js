import React, { useState } from 'react'
import { Button } from 'antd';
import 'antd/dist/reset.css';
import "./Increament.css";


const Increament = (props) => {
   
const {cnt,setCnt}=props;
  return (
    <>
    <div >
      <button className='Btn' onClick={()=>setCnt(cnt+1)}>+</button> 
      <button className='Btn' onClick={()=>setCnt(cnt-1)}>-</button>
    </div>
    </>
  )
}

export default Increament
