import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletetask } from '../actions/';
class Task extends Component{
  render(){
    return(
      <tr>
      <td>{this.props.task}</td>
      <td><button onClick={()=>{this.props.deletetask(this.props.id);}}>Delete</button></td>
      </tr>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({deletetask}, dispatch);
}

export default connect(()=>{return {};}, mapDispatchToProps)(Task);
