import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    let usernames = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        {this.props.userCount}
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {usernames}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

// access array of users, return an object with keys.
// Each key will become a prop in your component, 
// allowing you to assign values based on the provided state.
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  } 
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
