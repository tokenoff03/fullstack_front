import { createSelector } from "reselect";

export const getNewId = (state)=>{
    return state.roomPage.rooms.length + 1;
}

const getRooms = (state) => {
    return state.roomPage.rooms;
}

export const getIsPreLoader = (state) =>{
    return state.roomPage.isPreLoad;
}


export const getRoomsSuper = createSelector(getRooms,(rooms)=>{
    return rooms.filter((u)=>true);
})

export const getNewRoomNumber = (state) =>{
    return state.roomPage.newRoomNumber;
}

export const getNewCapacity = (state) =>{
    return state.roomPage.newCapacity;
}


export const getNewDescription = (state) =>{
    return state.roomPage.newDescription;
}

export const getNewPrice = (state) =>{
    return state.roomPage.newPrice;
}

export const getNewType = (state) => {
    return state.roomPage.newType;
}

export const getCheckAdd = (state) => {
    return state.roomPage.checkAdd;
}