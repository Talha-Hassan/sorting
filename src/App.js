import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {
  const [building,setBuilding] = useState(50)
  const [render,setrender] = useState(true)
  const divs = ()=>{
    const p = [];
    for(let i=0;i<building;i++){
      p.push(<div id={i} style={{width : '10px',height:`${Math.ceil(Math.random(50)*100)}px`,backgroundColor:'pink'}}></div>)
    }
    return p;
  }
  return (
    <div className="App">
       <div className='Main'>
          {divs()}
       </div>
          <button onClick={()=>{setrender(!render)}}>Refresh</button>
    </div>
  );
}

export default App;
