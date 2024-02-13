import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../App.css';

function RoomDescription(props) {
   
    const navigate = useNavigate();
    const newRoomNumber = React.useRef();
    const newCapacity = React.useRef();
    const newDescription = React.useRef();
    const newPrice = React.useRef();
    const newType = React.useRef();
   
  
    function changeBooked(){
      props.changeBooked(props.oneRoom.id);
    }

    function deleteRoom(){
      fetch(`http://localhost:8080/rooms/${props.oneRoom.id}`, {
                method: 'DELETE',
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network error');
                  }
                })
                .then(()=>{
                  props.deleteRoom(props.oneRoom.id)
                })
                .catch(error => {
                  console.error(`Error during DELETE request for ID ${props.oneRoom.id}:`, error.message);
                });
      navigate("/rooms");
    }
    
    function updateNewRoomsText () {
      props.updateNewRoomsText(newRoomNumber.current.value, newCapacity.current.value, newDescription.current.value, newPrice.current.value,newType.current.value)
    }

    function togleEdit (status) {
      props.togleEdit(status)
    }

    function updateRoom(){
      let updatedRoom = props.newRoom;
      updatedRoom.booked = props.oneRoom.booked;
      updatedRoom.id = props.oneRoom.id;
      fetch(`http://localhost:8080/rooms/${updatedRoom.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedRoom),
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network error');
                  }
                })
                .then(()=>{
                  props.updateRoom(updatedRoom);
                })
                .catch(error => {
                  console.error(`Error during DELETE request for ID ${updatedRoom.id}:`, error.message);
                });
    }
    


  return (
    <div className="RoomDescription">
        
        <div className='aboutRoom'>
          <img src={props.oneRoom.urlImg} alt='img'/>
          {
            props.roomPage.isEdit? 
            <div>
                <p>Room number: <input placeholder={props.oneRoom.roomNumber} ref={newRoomNumber} value={props.roomPage.newRoomNumber} onChange={updateNewRoomsText}/></p>
                <p>Capacity: <input placeholder={props.oneRoom.capacity} ref={newCapacity} value={props.roomPage.newCapacity} onChange={updateNewRoomsText}/></p>
                <p>Description: <input placeholder={props.oneRoom.description} ref={newDescription} value={props.roomPage.newDescription} onChange={updateNewRoomsText}/></p>
                <p>Price: <input placeholder={props.oneRoom.price} ref={newPrice} value={props.roomPage.newPrice} onChange={updateNewRoomsText}/></p>
                <p>Type: <input placeholder={props.oneRoom.type} ref={newType} value={props.roomPage.newType} onChange={updateNewRoomsText}/></p>
            </div>
            :
              <div>
                
                <p>Room number: {props.oneRoom.roomNumber}</p>
                <p>Capacity: {props.oneRoom.capacity}</p>
                <p>Description: {props.oneRoom.description}</p>
                <p>Price: {props.oneRoom.price}</p>
                <p>Type: {props.oneRoom.type}</p>
              </div>
              
          }
            
            
            {
               props.roomPage.isEdit  ? 
               <div>
                <button onClick={updateRoom}>Submit</button>
                <button onClick={()=>{togleEdit(false)}}>Cancel</button>
               </div> 
               :
               (
                <div>
                  {
                    props.oneRoom.booked ? (
                      <button onClick={changeBooked}>Booked</button>
                    ):
                    (<button onClick={changeBooked}>Free</button>)
                  }
                  <button onClick={deleteRoom}>Delete</button>
                  <button onClick={()=>{togleEdit(true)}}>Edit</button>
                </div>
               )
            }
            
        </div>            

    </div>
  );
}

export default RoomDescription;