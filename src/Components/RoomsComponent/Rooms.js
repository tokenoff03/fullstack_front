import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import '../../App.css';
import React from 'react';
import PreLoader from './PreLoader';


function Rooms(props) {
  const newRoomNumber = React.useRef();
  const newCapacity = React.useRef();
  const newDescription = React.useRef();
  const newPrice = React.useRef();
  const newType = React.useRef();
  function addRoom(){
    let newRoom  = {
      id: props.id,
      roomNumber: props.newRoomNumber,
      capacity: props.newCapacity,
      description: props.description,
      price: props.newPrice,
      type: props.newType,
      urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      booked: false
  }
    fetch('http://localhost:8080/rooms', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Add any other headers as needed
                },
                body: JSON.stringify(newRoom),
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network error');
                  }
                 
                  return response.json();
                })
                .then(data => {
                  props.addRoom()
                })
                .catch(error => {
                  console.error('Error during POST request:', error.message);
                });
  }

  function updateNewRoomsText () {
    props.updateNewRoomsText(newRoomNumber.current.value, newCapacity.current.value, newDescription.current.value, newPrice.current.value,newType.current.value)
  }

  function hideSuccess(){
    props.hideSuccess()
  }


  return (
    <div className="rooms">
        <h1>OUR ROOMS</h1>
        <p>Где роскошь становится вашим приватным миром.</p>
        <div className={props.checkAdd ? "" : "visible"} >
          <p className='succes-text'>Комната успешно было добавлено!</p>
          <button onClick={hideSuccess}>Hide</button>
        </div>

        <div className='form'> 
          <p>Add Rooms</p>
          <input type='text' placeholder='Room number' ref={newRoomNumber} value={props.newRoomNumber} onChange={updateNewRoomsText}/>
          <input type='text' placeholder='Capacity' ref={newCapacity} value={props.capacity} onChange={updateNewRoomsText}/>
          <input type='text' placeholder='Description' ref={newDescription} value={props.description} onChange={updateNewRoomsText}/>
          <input type='text' placeholder='Price' ref={newPrice} value={props.price} onChange={updateNewRoomsText} />
          <input type='text' placeholder='Type' ref={newType} value={props.type} onChange={updateNewRoomsText}/>
          <button onClick={addRoom} >Submit</button>
        </div>
        
        {
          props.isPreLoad ? <PreLoader/> 
          :
          
            <div className="roomimages">
              {
                props.rooms.map((room)=>(
                  <Link to={`/room/${room.id}`} key={room.id}>
                    <div className='innerimg'>
                    <img src={room.urlImg} className="img2"></img>
                    <p className="h11">Room number: {room.roomNumber}</p>
                    <p className="h11">{room.type}/{room.booked ? "Booked": "Free"}</p>
                    <p className="pricetag">{room.price}$/Night</p>
                  </div></Link>
                ))
              }

            </div>
          
        }
        
    </div>
  );
}

export default Rooms;