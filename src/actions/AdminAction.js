import {ADMIN_CREATE,ADMIN_SEQUENCE,RESET_ADMIN_FORM} from './types';
import api from '../base/utils/strings';
import axios from "axios"; 
import _ from 'lodash'

export const onAdminFieldChange =({prop,value})=>{
    return(dispatch) =>{
        dispatch({
            type: ADMIN_CREATE,
            payload: {prop,value}
        })
    }
};

//here we are getting accountid
export const AdminAccountCreate =(Name,MobileNumber, pannumber)=>{
  console.log(pannumber, "pannumber")
    return dispatch => {
      console.log(Name,MobileNumber)
      axios.post(api.oyeLivingUrl+"account/signup", {
        //Request Body 
        
             ACFName     : Name ,
             ACLName     :  "",
             ACMobile    : MobileNumber,
             ACMobile1   : "" ,
             ACMobile2   : "", 
             ACMobile3   : "",
             ACMobile4   : "",
             ACEmail     : "",
             ACEmail1    :  "" ,
             ACEmail2    :  "" ,
             ACEmail3    :  "" ,
             ACEmail4    :  "" ,
             ACISDCode   :  "+91" ,
             ACISDCode1  :  "" ,
             ACISDCode2  :  "" ,
             ACISDCode3  :  "" ,
             ACISDCode4  :  "" ,
             ACCrtyCode  : "IN" ,
             ACCrtyCode1 : "" 
        
      }, { // shall i try u had lunch? yes
         headers: {
             "Content-Type": "application/json",
             "X-CHAMP-APIKey": api.oyeLivingApiKey
         }
     }).then(response => {
       let accountId= response.data.data.account.acAccntID;
       console.log(accountId, "admin create") 
       dispatch({
         type:ADMIN_SEQUENCE,
         payload:"Account Created Successfully"
       });

     
       PanNumberCheck(accountId, pannumber, dispatch)
      
       alert('Admin Account Created successully')
     })
     .catch(error => {
       console.log("admin create error",error)
     });
    }
};


//In Association
const AdminAccountUpdate =(AccountID,AssociationID)=>{
  return dispatch => {
    console.log("Account",AccountID)
    axios.post(api.oyeLivingUrl+"association/UpdateAccountID", {
      //Request Body 
      
           ACAccntID     : AccountID,
           ASAssnID     :  AssociationID,    
    }, {
       headers: {
           "Content-Type": "application/json",
           "X-CHAMP-APIKey": api.oyeLivingApiKey
       }
   }).then(response => {
     let data = response.data;
     dispatch({
       type:ADMIN_SEQUENCE,
       payload:"AccountID Updated Successfully"
     });
   })
   .catch(error => {
     console.log("error",error)
   });
  }
};

const AdminMemberAccountUpdate =(AccountID,AssociationID)=>{
  return dispatch => {
    console.log("MemberAccount",AccountID)
    axios.post(api.oyeLivingUrl+"Member/UpdateMemberAccountID", {
           ACAccntID     : AccountID,
           ASAssnID     :  AssociationID,    
    }, {
       headers: {
           "Content-Type": "application/json",
           "X-CHAMP-APIKey": api.oyeLivingApiKey
       }
   }).then(response => {
     let data = response.data;
    
     dispatch({
       type:ADMIN_SEQUENCE,
       payload:"AccountID Updated In Member Successfully"
     });
   })
   .catch(error => {
     console.log("error",error)
   });
  }
};

const PanNumberCheck =(accountid, PanNumber, dispatch)=>{

  console.log(accountid ,"Inside pannumbercheck")
              axios.get(api.oyeLivingUrl+"association/getassociationlist",  {
                 headers: {
                     "Content-Type": "application/json",
                     "X-Champ-APIKey": api.oyeLivingApiKey
                 }
             }).then(res => {
                 let assoList = res.data.data.associations
                  let foundData = _.find(assoList, (asso) => {
                      return asso.aspanNum === PanNumber
                  })

                  if(foundData) {
                      console.log(accountid,foundData.asAssnID) 

                      axios.post(api.oyeLivingUrl+"Member/UpdateMemberAccountID", {
                        ACAccntID     : accountid,
                        ASAssnID     :  foundData.asAssnID,    
                 }, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CHAMP-APIKey": api.oyeLivingApiKey
                    }
                }).then(res => {
                  let data = res.data;
                  console.log(data, "member account id update")
                  dispatch({
                    type:ADMIN_SEQUENCE,
                    payload:"AccountID Updated In Member Successfully" 
                  });

                  axios.post(api.oyeLivingUrl+"association/UpdateAccountID", {
                    //Request Body 
                    
                         ACAccntID     : accountid,
                         ASAssnID     :  foundData.asAssnID,    
                  }, {
                     headers: {
                         "Content-Type": "application/json",
                         "X-CHAMP-APIKey": api.oyeLivingApiKey
                     }
                 }).then(response => {
                   let data = response.data;
                   console.log(data, "account id update")
                   dispatch({
                     type:ADMIN_SEQUENCE,
                     payload:"AccountID Updated Successfully"
                   });
                   
                 })
                 .catch(error => {
                   console.log("error",error)
                 });
                })
                .catch(error => {
                  console.log("error",error)
                });
                  }
             })    
           .catch(error =>{
             console.log("error", error);
           });
          };

export const resetAdminFom= () => {
            return (dispatch) => {
              dispatch({
                type: RESET_ADMIN_FORM
              })
            }
          }