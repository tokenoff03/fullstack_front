const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT"; 
const DELETE_COMMENT = "DELETE-COMMENT"

let initialState = {
    comments: [
        {
            id: 1,
            message: "Good site",
            user: {
                id: 3, 
                name: "Adil",
                surName: "Token",
                email: "adilToken@mail.ru"
            }
        },
        {
            id: 2,
            message: "Not bad",
            user: {
                id: 4,
                name: "Olzhas",
                surName: "KnewIT",
                email: "olzhas123@mail.ru"
            }
        }
    ],
    fake: 15,
    newCommentText: "",
}




let commentsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "FAKE" : {return {...state,fake: state.fake+1}}
        case ADD_COMMENT:{
            return {
                ...state,
                comments: [...state.comments, {id: state.comments.length + 1,message: state.newCommentText}],
                newCommentText: ""
            };
        }
        case UPDATE_NEW_COMMENT_TEXT: {
            
            return {
                ...state,
                newCommentText: action.newText
            };
        }

        case DELETE_COMMENT: {
            const filteredComment = state.comments.filter(comment => comment.id != action.id);
            return {
                ...state,
                comments: filteredComment,
            }
        }
        default: 
            return state;
    }
}

export const addCommentActionCreator = (user)=>({type: ADD_COMMENT, user})

export const updateNewCommentTextActionCreater = (text) =>({type: UPDATE_NEW_COMMENT_TEXT, newText:  text})
export const deleteComment = (id) => ({type: DELETE_COMMENT, id})

export default commentsReducer;