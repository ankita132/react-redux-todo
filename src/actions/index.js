export const addtask = (task) =>{
  return {
    type:'ADD_TASK',
    payload:task
  };
},
deletetask = (taskId) =>{
  return {
    type:'DELETE_TASK',
    payload:taskId
  };
};
