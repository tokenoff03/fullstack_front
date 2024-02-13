import { useParams } from 'react-router-dom';
import '../../App.css';
import RoomDescription from './RoomDescription';
import { connect } from 'react-redux';
import { deleteRoom, togleEdit, changeBooked, updateNewRoomsText, updateRoom, setOneRoom } from '../../redux/roomsReducer';
import { useEffect } from 'react';
import withAuthRedirect from '../HOC/withAuthRedirect';


let RoomDescriptionContainer = (props) => {
  const { id } = useParams();
  useEffect(()=>{
    fetch(`http://localhost:8080/rooms/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then(data => {
        props.setOneRoom(data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error.message);
      });
      
    return () => {
        if(props.roomPage.isEdit){
          props.togleEdit(false)
        }
    };
  },[props.roomPage.isEdit])

  return <RoomDescription  {...props}/>
}

let mapStateToProps = (state) => {
  return {
    roomPage: state.roomPage,
    newRoom: {
        roomNumber: state.roomPage.newRoomNumber,
        capacity: state.roomPage.newCapacity,
        description: state.roomPage.newDescription,
        price: state.roomPage.newPrice,
        type: state.roomPage.newType,
        urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
    },
    oneRoom: state.roomPage.oneRoom
  }
}

let AuthRedirect = withAuthRedirect(RoomDescriptionContainer)
export default connect(mapStateToProps, {changeBooked,deleteRoom,updateNewRoomsText,togleEdit,updateRoom,setOneRoom})(AuthRedirect);