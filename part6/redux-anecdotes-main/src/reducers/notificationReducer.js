const notificationReducer = (state = null, action) => {
 switch (action.type){
  case 'NEW_NOTIFICATION':
   return action.notification
  case 'HIDE_NOTIFICATION':
   return action.notification
   default: return state
 }
}

export default notificationReducer;