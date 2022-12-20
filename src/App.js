import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*Components*/
import Home from './Commponents/Home';
import Todolist from './Commponents/Todolist'

const App = () => {
  // const name = "bossRod";

  // const [acount, setCount ] = useState(0);
  // const [user, setUser ] = useState('');


  // const handleClickPlus = () => {
  //   // eslint-disable-next-line no-const-assign
  //   setCount(acount + 1)
  // }

  // const handleClickMinus = () => {
  //   // eslint-disable-next-line no-const-assign
  //   setCount(acount - 1)
  // }

  // const onChangeUser = (e) => {
  //   //console.log(e.target.value);
  //   setUser(e.target.value);
  // }

  return (
    <div className='app-main'>
      {/* <h1>{name}</h1>
      <div>Count : {acount} </div>
       <button onClick={handleClickPlus}>+</button>
       <button onClick={handleClickMinus} >-</button>
       <input  onChange={onChangeUser} value={user}></input> */}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/todolist' element={<Todolist />} />
      </Routes>
    </div>
  );
}


export default App;
