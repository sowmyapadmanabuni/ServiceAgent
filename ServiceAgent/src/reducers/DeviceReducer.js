import {DEVICE_CREATION} from "../actions/types";


const INITIAL_STATE ={
  
    MobileNumber:"",
    IMEINumber:"",
    GateName:"",
    // AssociationID:"",
    loading : false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case DEVICE_CREATION:
        return { ...state, [action.payload.prop]: action.payload.value };
  
      default:
        return state;
    }
  };
