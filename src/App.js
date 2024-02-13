
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import RoomsContainer from './Components/RoomsComponent/RoomsContainer';
import RoomDescriptionContainer from './Components/RoomsComponent/RoomDescriptionContainer';
import CommentsContainer from './Components/CommentsContainer';
import Login from './Components/LoginComponent/Login';
import RegisterContainerComponent from './Components/RegisterComponent/RegisterContainerComponent';

function App(props) {
  

  return (
    <BrowserRouter>
        <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/rooms" element={<RoomsContainer/>} />
          <Route path="/room/:id" element={<RoomDescriptionContainer/>} />
          <Route path="/comments" element={<CommentsContainer/> }/>
          <Route path='/register' element={<RegisterContainerComponent/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
