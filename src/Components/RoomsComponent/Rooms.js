import { Link, NavLink } from 'react-router-dom';
import '../../App.css';
import React from 'react';

function Rooms(props) {
  
  
  const roomNumber = React.createRef();
  const capacity = React.createRef();
  const description = React.createRef();
  const price = React.createRef();
  const type = React.createRef();


  function addRoom(){
    
    let roomNumberText = roomNumber.current.value;
    let capacityText = capacity.current.value;
    let descriptionText =description.current.value;
    let priceText = price.current.value;
    let typeText = type.current.value;
    let room = {
      id: props.state.rooms.length + 1,
      roomNumber: roomNumberText,
      capacity: capacityText,
      description: descriptionText,
      price: priceText,
      type: typeText,
      urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      booked: false
    }
    props.addRoom(room);

  }


  return (
    <div className="rooms">
        <h1>OUR ROOMS</h1>
        <p>Где роскошь становится вашим приватным миром.</p>
        <div className='form'> 
          <p>Add Rooms</p>
          <input type='text' placeholder='Room number' ref={roomNumber}/>
          <input type='text' placeholder='Capacity' ref={capacity}/>
          <input type='text' placeholder='Description' ref={description}/>
          <input type='text' placeholder='Price' ref={price}/>
          <input type='text' placeholder='Type' ref={type}/>
          <button onClick={addRoom} >Submit</button>
        </div>
        <div class="roomimages">
          {
            props.state.rooms.map((room)=>(
              <Link to={`/room/${room.id}`}>
                <div className='innerimg' key={room.id}>
                <img src={room.urlImg} class="img2"></img>
                <p class="h11">Room number: {room.roomNumber}</p>
                <p class="h11">{room.type}/{room.booked ? "Booked": "Free"}</p>
                <p class="pricetag">{room.price}$/Night</p>
              </div></Link>
            ))
          }

        </div>
    </div>
  );
}

export default Rooms;