import {ADMIN_CREATE} from "../actions/types";


const INITIAL_STATE ={
   
    Name:"",
    MobileNumber:"",   
    loading : false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADMIN_CREATE:
        return { ...state, [action.payload.prop]: action.payload.value };
  
      default:
        return state;
    }
  };
