const ADD_ROOM = "ADD-ROOM";
const UPDATE_NEW_ROOMS_TEXT = "UPDATE-NEW-ROOMS-TEXT"
const UPDATE_BOOKED = "UPDATE-BOOKED"
const SET_ROOMS = "SET-ROOMS"
const HIDE_SUCCESS = "HIDE-SUCCESS"
const DELETE_ROOM = "DELETE-ROOM";
const TOGLE_PRELOAD = "TOGLE-PRELOAD"
const TOGLE_EDIT = "TOGLE-EDIT"
const UPDATE_ROOM = "UPDATE-ROOM"
const SET_ONE_ROOM = "SET-ONE-ROOM"
let initialState = {
        rooms: [
            // {
            //     id: 1,
            //     roomNumber: 1,
            //     capacity: 5,
            //     description: null,
            //     price: 50.0,
            //     type: "Single",
            //     urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
            //     booked: false
            // },
            // {
            //     id: 2,
            //     roomNumber: 2,
            //     capacity: 4,
            //     description: null,
            //     price: 60.0,
            //     type: "Double",
            //     urlImg: "https://cf.bstatic.com/images/hotel/max1024x768/419/419461259.jpg",
            //     booked: false
            // },
            // {
            //     id: 3,
            //     roomNumber: 3,
            //     capacity: 7,
            //     description: null,
            //     price: 70.0,
            //     type: "Suite",
            //     urlImg: "https://www.resortatcypresshills.ca/assets/queen-e-1024x683.jpg",
            //     booked: false
            // },
            // {
            //     id: 4,
            //     roomNumber: 4,
            //     capacity: 2,
            //     description: null,
            //     price: 40.0,
            //     type: "Single",
            //     urlImg: "https://media-cdn.tripadvisor.com/media/photo-m/1280/26/7e/54/4d/rooms-hotel-kazbegi.jpg",
            //     booked: false
            // }
        ],
        oneRoom: {},
        newRoomNumber: "",
        newCapacity: "",
        newDescription: "",
        newPrice: "",
        newType: "",
        newBooked: "",
        checkAdd: false,
        isPreLoad: true,
        isEdit: false,
}

let roomsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_ROOM: {
                return {
                    ...state,
                    rooms: [...state.rooms,
                        {
                            id: state.rooms.length + 1,
                            roomNumber: state.newRoomNumber,
                            capacity: state.newCapacity,
                            description: state.newDescription,
                            price: state.newPrice,
                            type: state.newType,
                            urlImg: "https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
                            booked: false
                        }
                    ],
                    newRoomNumber: "",
                    newCapacity: "",
                    newDescription: "",
                    newPrice: "",
                    newType: "",
                    newBooked: "",
                    checkAdd: true
                };
        }

        case SET_ONE_ROOM: {
            return {
                ...state,
                oneRoom: action.room
            }
        }
        case UPDATE_NEW_ROOMS_TEXT: {
      
            return {
                ...state,
                newRoomNumber: action.newRoomNumber,
                newCapacity: action.newCapacity,
                newDescription: action.newDescription,
                newPrice: action.newPrice,
                newType: action.newType
            };
        }

        case TOGLE_PRELOAD: {
            return {...state, isPreLoad: action.status}
        }
        
        case UPDATE_BOOKED: {

            return {
                ...state, 
                rooms: state.rooms.map((room)=>{
                    if(action.id == room.id){
                        if(room.booked){
                            return {...room, booked: false}
                        }
                        else {
                            return {...room, booked: true}
                        }
                    }
                    return room;
                }),
                oneRoom: {...state.oneRoom, booked: state.oneRoom.booked? false : true}
            }
        }

        case HIDE_SUCCESS: {
        
            return {
                ...state,
                checkAdd: false
            }
        }

        case DELETE_ROOM: {
            const filteredRooms = state.rooms.filter(room => room.id != action.id);
            return {
                ...state,
                rooms: filteredRooms,
                oneRoom: {}
            }
        }

        case SET_ROOMS: {

            return {
                ...state,
                rooms: action.rooms
            }

        }

        case TOGLE_EDIT: {
           
            return {
                ...state, 
                isEdit: action.status
            }
        }

        case UPDATE_ROOM: {
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if(room.id == action.body.id){
                        return action.body
                    }
                    else return room;
                }),
                oneRoom: action.body,
                newRoomNumber: "",
                newCapacity: "",
                newDescription: "",
                newPrice: "",
                newType: "",
                newBooked: "",
                isEdit: state.isEdit ? false: true
                    
            }
        }
        default:
            return state;
    }
    
}

export const addRoom = () => ({type: ADD_ROOM})
export const  updateNewRoomsText = (roomNumber, capacity, description, price,type ) =>(
        {
            type: UPDATE_NEW_ROOMS_TEXT, 
            newRoomNumber: roomNumber,
            newCapacity: capacity,
            newDescription: description,
            newPrice: price,
            newType: type
        }
    )


export const setOneRoom =(room)=>({type: SET_ONE_ROOM, room: room})
export const setRooms = (rooms) => ({type: SET_ROOMS, rooms: rooms})
export const changeBooked = (id)=>({type:UPDATE_BOOKED, id: id})
export const hideSuccess = ()=>({type: HIDE_SUCCESS})
export const deleteRoom = (id) => ({type: DELETE_ROOM, id: id})
export const toglePreload = (status) => ({type: TOGLE_PRELOAD, status: status})
export const togleEdit = (status)=>({type: TOGLE_EDIT, status:status})
export const updateRoom = (body)=>({type: UPDATE_ROOM, body:body})
export default roomsReducer;