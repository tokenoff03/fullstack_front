
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import '../App.css';
import { addCommentActionCreator, deleteComment, updateNewCommentTextActionCreater } from '../redux/commentsReducer';
import Comments from './Comments';
import { connect } from 'react-redux';
import withAuthRedirect from './HOC/withAuthRedirect';


let CommentsContainer = (props) =>{

  return <Comments {...props}/>
}
function mapStateToProps (state){
  return {
    commentsPage: state.commentsPage
  }
}

function mapDispatchToProps(dispatch){
  return {
    addComment: (user)=>{
      dispatch(addCommentActionCreator(user))
    },
    updateNewCommentText: (text)=>{
      dispatch(updateNewCommentTextActionCreater(text))
    },
    deleteComment: (id) => {
      dispatch(deleteComment(id))
    }
  }
}

let AuthRedirect = withAuthRedirect(CommentsContainer)
export default connect(mapStateToProps,mapDispatchToProps)(AuthRedirect);


