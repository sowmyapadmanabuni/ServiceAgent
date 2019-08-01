import {DEVICE_CREATION} from './types';
import api from '../base/utils/strings';
import axios from "axios"; 

export const onDeviceFieldChange =({prop,value})=>{
    return(dispatch) =>{
        dispatch({
            type: DEVICE_CREATION,
            payload: {prop,value}
        })
    }
};


export const DeviceCreate =(AssociationID,MobileNumber,IMEINumber,GateNumber)=>{
    return dispatch => {
      console.log("AssociationID",AssociationID);
      axios.post(api.oyeSafeUrl+"Device/Devicecreate", {
        //Request Body 
        
       ASAssnID  : AssociationID,
       DEMobileNo: MobileNumber,
       DEIMEI    : IMEINumber,
       DEGateNo  : GateNumber
      }, {
         headers: {
             "Content-Type": "application/json",
             "X-OYE247-APIKey": api.oyeSafeApiKey
         }
     }).then(response => {
       let data = response.data;
       dispatch({
         type:LOGIN_SEQUENCE,
         payload:"Device Added Successfully"
       });
     })
     .catch(error => {
       console.log("error",error)
     });
    }
};