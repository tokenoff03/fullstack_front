import commentsReducer from "./commentsReducer";
import roomsReducer from "./roomsReducer";

let store = {
    _state: {
        roomPage: {
            rooms: [
                {
                    id: 1,
                    roomNumber: 1,
                    capacity: 5,
                    description: null,
                    price: 50.0,
                    type: "Single",
                    urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
                    booked: false
                },
                {
                    id: 2,
                    roomNumber: 2,
                    capacity: 4,
                    description: null,
                    price: 60.0,
                    type: "Double",
                    urlImg: "https://cf.bstatic.com/images/hotel/max1024x768/419/419461259.jpg",
                    booked: false
                },
                {
                    id: 3,
                    roomNumber: 3,
                    capacity: 7,
                    description: null,
                    price: 70.0,
                    type: "Suite",
                    urlImg: "https://www.resortatcypresshills.ca/assets/queen-e-1024x683.jpg",
                    booked: false
                },
                {
                    id: 4,
                    roomNumber: 4,
                    capacity: 2,
                    description: null,
                    price: 40.0,
                    type: "Single",
                    urlImg: "https://media-cdn.tripadvisor.com/media/photo-m/1280/26/7e/54/4d/rooms-hotel-kazbegi.jpg",
                    booked: false
                }
            ]
        },
        
        commentsPage: {
            comments: [
                {
                    id: 1,
                    message: "Good site",
                },
                {
                    id: 2,
                    message: "Not bad",
                },
                {
                    id: 3,
                    message: "Sorry, but i dont realy like it",
                }
            ],
            newCommentText: "",
        }
    },

    getState(){
        return this._state;
    },

    _callSubscribe() {
        console.log("state changed");
    },

    subscribe (observer) {
        this._callSubscribe = observer; 
    },
    
    dispatch(action){
        this._state.commentsPage =  commentsReducer(this._state.commentsPage, action)
        this._state.roomPage =  roomsReducer(this._state.roomPage, action)
        this._callSubscribe(this._state);
    }
}


export default store;




