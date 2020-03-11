import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  users = () => {
    return this.props.users.map(user => {return <li>{user.username}</li>})
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        {this.props.userCount}
        <ul>
          Users!
          {this.users()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users,
          userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
