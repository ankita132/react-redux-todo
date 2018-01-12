import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addtask } from '../actions/';
class Taskbar extends Component {
  render(){
    return(
      <div>
      <input type="text" ref="task" placeholder="add your task here.." />
      <button onClick={()=>this.props.addtask(this.refs.task.value)}>Add task</button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addtask}, dispatch);
}
export default connect(()=>{return {};},mapDispatchToProps)(Taskbar);
