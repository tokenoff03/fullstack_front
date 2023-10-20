import { useParams } from 'react-router-dom';
import '../../App.css';

function RoomDescription(props) {
    const { id } = useParams();
    
  return (
    <div className="RoomDescription">
        
        <div className='aboutRoom'>
            <img src={props.state.rooms[id-1].urlImg} alt='img'/>
            <p>Room number: {props.state.rooms[id-1].roomNumber}</p>
            <p>Capacity: {props.state.rooms[id-1].capacity}</p>
            <p>Description: {props.state.rooms[id-1].description}</p>
            <p>Price: {props.state.rooms[id-1].price}</p>
            <p>Type: {props.state.rooms[id-1].type}</p>
            <p>Booked: {props.state.rooms[id-1].booked ? "True" : "False"}</p>
        </div>            

    </div>
  );
}

export default RoomDescription;