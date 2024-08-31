import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import Form2 from './components/Form2';
import Context from './components/useContext/Context';
import UseRef from './components/UseRef';
import Callback from './components/callback/Callback';
import Memo from './components/usememo/Memo';
import UseReducer from './components/useReducer/UseReducer';
import UsePostHookComponent from './components/UsePostHookComponent';
import TabSlider from './TabSlider';
import SliderSlick from "./components/SliderSlick"

import { UserProfilePic } from './components/ProfilePage';
function App() {
  // const [names,setName]=useState('')
  // function getname(name){
  //  setName(name)
  // } Home component
  return (
    <div className="">
      {/* <h1>Practice</h1> <hr /> */}
      {/* <Home getname={getname}/>{names} */}
      {/* <Form/> */}
      {/* <Form2/> */}
      {/* <Context/> */}
      {/* <UseRef /> */}
      {/* <Callback/> */}
      {/* <Memo/> */}
      {/* <UseReducer/> */}
      {/* <UsePostHookComponent /> */}
      {/* <TabSlider /> */}
      {/* <SliderSlick /> */}
      <UserProfilePic />

    </div>
  );
}

export default App;
