let store = {
    state: {
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

        
    }
}

export const addRoom = (room)=>{
    store.state.roomPage.rooms.push(room);
}

export default store;