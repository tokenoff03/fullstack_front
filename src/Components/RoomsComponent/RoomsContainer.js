import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../App.css';
import React, { useEffect } from 'react';
import { addRoom, updateNewRoomsText, setRooms, hideSuccess, toglePreload } from '../../redux/roomsReducer';
import Rooms from './Rooms'
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { getCheckAdd, getIsPreLoader, getNewCapacity, getNewDescription, getNewId, getNewPrice, getNewRoomNumber, getNewType, getRoomsSuper } from '../../redux/roomsSelector';

let RoomsContainer = (props)=>{
  
  useEffect(() => {
    
    props.toglePreload(true);
    fetch('http://localhost:8080/rooms')
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка сети');
          }
          return response.json();
        })
        .then(data => {
          props.setRooms(data);
          props.toglePreload(false)
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error.message);
        });
  },[])
  
  console.log("ROOMS")
  return <Rooms {...props}/>
}


let mapStateToProps = (state)=> {
  console.log("MapStateToProps done")
  return {
    id : getNewId(state),
    rooms: getRoomsSuper(state),
    newRoomNumber: getNewRoomNumber(state),
    capacity: getNewCapacity(state),
    description: getNewDescription(state),
    price: getNewPrice(state),
    type: getNewType(state),
    checkAdd: getCheckAdd(state),
    isPreLoad: getIsPreLoader(state)
  }
}

let AuthRedirect = withAuthRedirect(RoomsContainer)
export default connect(mapStateToProps,{addRoom,updateNewRoomsText,setRooms,toglePreload,hideSuccess,toglePreload})(AuthRedirect);