import React,{Component} from "react";
import {View,Text,TextInput,ScrollView} from "react-native";
import { connect } from "react-redux";
import  Header from "../../../src/components/common/Header";
import {GlobalStyle} from "../../../src/components/common/GlobalStyle";
import base from "../../../src/base";
import Card from "../../../src/components/common/Card";
import Button from "../../../src/components/common/Button";
import {onDeviceFieldChange,DeviceCreate} from "../../actions";
import Validation from "../../components/common/Validation";
import _ from "lodash";
import axios from 'axios';
import api from '../../base/utils/strings';

class AddDevice extends Component{
    constructor(props){
        super(props);
    this.state={};
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
    const {onDeviceFieldChange,MobileNumber,IMEINumber,GateName}=this.props;
    return(
        <ScrollView>
            <Header></Header>
            <View style={GlobalStyle.Title}>
               <Text style={{ color: base.theme.colors.primary,marginBottom:20}}> Device Management </Text>
            </View>

            <Card style ={{backgroundColor:"orange"}} > 
                  <View style ={GlobalStyle.Title} >
                  <Text style ={{color:base.theme.colors.white}}> Device Details</Text>
               
                  </View>
              </Card>

              <Card>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Device MobileNumber <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Device MobileNumber"
                       value={MobileNumber}
                       onChangeText={MobileNumber => onDeviceFieldChange({ prop:"MobileNumber", value : MobileNumber})}
                       />
                  </View>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Device IMEI Number <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Device IMEI Number"
                       value={IMEINumber}
                       onChangeText={IMEINumber => onDeviceFieldChange({ prop:"IMEINumber", value : IMEINumber})}
                      
                       />
                  </View>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Device Gate Name <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Device Gate Name"
                       value={GateName}
                       onChangeText={GateName=>onDeviceFieldChange({prop:"GateName",value:GateName})}/>
                  </View>
             <View style ={GlobalStyle.buttonTextSyle}>
                 <Button 
                title ="Reset"
                titleStyle ={{color: "#fff", fontSize: 15}}
                type ="solid"
                containerStyle ={{width:"20%"}}
                />
                <Button 
                 title ="Add Device"
                 titleStyle ={{color: "#fff", fontSize: 15}}
                 type ="solid"
                 containerStyle ={{width:"20%"}}
                 onPress={() => {
                    this.DeviceValidation()   
                 }}
                /> 
                </View>
             </Card>
     </ScrollView>
    );
}

   DeviceValidation=()=>{
    const {MobileNumber,IMEINumber,GateName}=this.props;
    if(MobileNumber === '' || MobileNumber.length < 10 || MobileNumber.length > 10)
    {
        alert('Enter Valid MobileNumber');
    }
    else if(Validation.Mobileregex.test(MobileNumber) === false){
        alert('Enter Valid MobileNumber');
    }
    else{
        //this.props.DeviceCreate("8",MobileNumber,IMEINumber,GateName);
        this.getAssociationID()
    }
   }


   getAssociationID =()=>{
    const{PanNumber,MobileNumber,IMEINumber,GateName} = this.props;
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
                       
                       console.log(foundData.asAssnID)
                      this.props.DeviceCreate(foundData.asAssnID,MobileNumber,IMEINumber,GateName)
                    } 
               })    
             .catch(error =>{
               console.log("error", error);
             });
            };
};

const mapStateToProps = state => {
    return {
      MobileNumber: state.DeviceReducer.MobileNumber,
      IMEINumber:state.DeviceReducer.IMEINumber,
      GateName: state.DeviceReducer.GateName,
      loading : state.DeviceReducer.loading,
      PanNumber:state.EnrollAssociationReducer.PanNumber
    };
  };

export default connect(mapStateToProps,{onDeviceFieldChange,DeviceCreate})(AddDevice);