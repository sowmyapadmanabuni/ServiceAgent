import React, {Component} from "react";
import {View,Text} from "react-native";
import Button from "../../../src/components/common/Button";
import Header from "../../../src/components/common/Header";
import { TextInput } from "react-native-gesture-handler";
import {onEnrollFieldChange,EnrolAssociaiton,resetAdminFom} from "../../actions";
import Validation from "../../components/common/Validation";
import { connect } from "react-redux";
//import { GlobalStyle } from "../../../src/components/common/GlobalStyle";
import base from "../../../src/base";

// import api from '../base/utils/strings';
// import axios from "axios"; 

class BlockDetails extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentDidMount(){}
    static getDerivedStateFromProps(props,state)
    {
        return null;
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        return null;
    }
    componentDidUpdate(prevprops,prevstate){
    }
    componentWillUnmount(){}

     render(){
         const {NoofBlocks,NoofUnits,onEnrollFieldChange} = this.props;
         return(
             <View>
                 <Header></Header>
                
                     <Text>Input No.of Blocks</Text>
                     <TextInput
                     placeholder ="Enter No.of Blocks"
                     value ={NoofBlocks}
                     onChangeText ={NoofBlocks=>{   
                         onEnrollFieldChange({
                             prop:"NoofBlocks",value:NoofBlocks
                         })                     
                     }}
                     /> 
                      <Text>Input No.of Units</Text>
                     <TextInput
                     placeholder ="Enter No.of Units"
                     value ={NoofUnits}
                     onChangeText ={NoofUnits=>{   
                         onEnrollFieldChange({
                             prop:"NoofUnits",value:NoofUnits
                         })                     
                     }}
                     /> 
               
                 <Button
                 title ="Next"
                onPress ={()=>{
                    this.BlockValidation()
                }}
                 />
             </View>
         )
     }

   

     BlockValidation=()=>{
         const{AssociationName,AssociationAddress,PropertyName,Country,State,City,Pincode,EmailID,NoofBlocks,NoofUnits,PanNumber,MobileNumber,resetAdminFom}=this.props;
         if(NoofBlocks === '' || Validation.Numeric.test(NoofBlocks) === false)
         {
             alert('Enter Valid Noof Blocks');
         }
         else if(NoofUnits === ''  || Validation.Numeric.test(NoofUnits) === false){
             alert('Enter Valid Noof Units');
         }
         else if(Number(NoofUnits) < Number(NoofBlocks))
         {
             alert('Noof Units cant be more than Noof Blocks');
         }
         else{
               // this.props.navigation.navigate("EnrolDevice") 
               console.log("LoginMobileNumber", MobileNumber)
               resetAdminFom()
               this.props.EnrolAssociaiton(AssociationName,AssociationAddress,PropertyName,Country,State,City,Pincode,EmailID,NoofBlocks,NoofUnits,PanNumber,MobileNumber,this.props.navigation);
               // this.props.PanValidation()
            }
     }
    
     
}

const mapStateToProps =state =>{
    return{
     NoofBlocks: state.EnrollAssociationReducer.NoofBlocks,
     NoofUnits: state.EnrollAssociationReducer.NoofUnits,
    
     //Newly Adding to create Association 
     AssociationName    : state.EnrollAssociationReducer.AssociationName,
     AssociationAddress : state.EnrollAssociationReducer.AssociationAddress, 
     PropertyName       : state.EnrollAssociationReducer.PropertyName,
     Country            : state.EnrollAssociationReducer.Country,
     State              : state.EnrollAssociationReducer.State,
     City               : state.EnrollAssociationReducer.City,
     Pincode            : state.EnrollAssociationReducer.Pincode,
     EmailID            : state.EnrollAssociationReducer.EmailID,
     PanNumber          : state.EnrollAssociationReducer.PanNumber,
     MobileNumber       : state.LoginReducer.MobileNumber,
    };
}


export default connect(mapStateToProps,{onEnrollFieldChange,EnrolAssociaiton,resetAdminFom})(BlockDetails);
