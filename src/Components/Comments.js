
import { NavLink } from 'react-router-dom';
import React from 'react';
import '../App.css';

function Comments(props) {
  const message = React.useRef();
  
  let addComment = ()=> {
    
    props.addComment(
      {
        id: props.authUser.id,
        name: props.authUser.name,
        surName: props.authUser.surName,
        email: props.authUser.email
      }
      );
  }

  let deleteComment = (id) =>{
    props.deleteComment(id);
  }

  let updateNewCommentText = ()=>{
    props.updateNewCommentText(message.current.value)
  }
  
  return (
    <div className="Comments">
        <div className='comments_form'>
        <textarea ref={message} onChange={updateNewCommentText} value={props.commentsPage.newCommentText}/>
        <button onClick={addComment}>Add Comment</button>
        </div>

        {
          props.commentsPage.comments.map((comment)=> (
            <div className='comment_block' key={comment.id}>
              <p>{comment.user.email}</p>
              <p>{comment.message}</p>
              {
                comment.user.email == props.authUser.email?
                (
                  <button onClick={()=>{deleteComment(comment.id)}}>Delete</button>
                ):(
                <div></div>
                )
                
              }
              
            </div>
          ))
        }
        

    </div>
  );
}

export default Comments;