
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Rooms from './Components/RoomsComponent/Rooms';

import RoomDescription from './Components/RoomsComponent/RoomDescription';
function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/rooms" element={<Rooms state = {props.state.roomPage} addRoom = {props.addRoom}/>} />
        <Route path="/room/:id" element={<RoomDescription state = {props.state.roomPage}/>} />
      </Routes>
     
      
      </div>
    </BrowserRouter>

  );
}

export default App;
