import {ENROLL_ASSOCIATION, RESET_ASSOCIATION_FORM} from "../actions/types";


const INITIAL_STATE ={
  //Requestbody
    AssociationName : "",
    PropertyName : "",
    AssociationAddress: "",
    PropertyType:"",
    Country:"",
    State:"",
    City:"",
    Pincode:"",
    EmailID:"",
    PanNumber:"",
    PanNumber:"",
    NoofBlocks:"",
    NoofUnits:"",
    loading : false
}

export default (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
      case ENROLL_ASSOCIATION:
        return { ...state, [action.payload.prop]: action.payload.value };
  
      case RESET_ASSOCIATION_FORM:
        return { ...state, ...INITIAL_STATE}
      default:
        return state;
    }
  };
