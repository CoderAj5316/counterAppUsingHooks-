import './App.css';
import NavBar from './components/NavBar';
import 'antd/dist/reset.css';
import Footer from './components/Footer';
import Increament from './components/Increament';
import { useState } from 'react';
function App() 
{
  const [cnt,setCnt]=useState(0);
  return (
    <div className="App" >
      <NavBar/>
      <Increament cnt={cnt} setCnt={setCnt}/>
      <Footer cnt={cnt}/>   
    </div>
  );
}

export default App;
