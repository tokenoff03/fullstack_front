
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { createUser } from '../../redux/usersReducer';


let RegisterContainer = (props) => {

    return <Register {...props}/>
}


function mapStateToProps (state){
  return {
    usersPage: state.usersPage,

  }
}


 
export default connect(mapStateToProps,{createUser})(RegisterContainer);;


