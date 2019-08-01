import React,{Component} from "react";
import {View,Text,StyleSheet,TextInput,ScrollView, Image} from "react-native";
import { connect } from "react-redux";
import { GlobalStyle } from "../../../src/components/common/GlobalStyle";
import Button from "../../../src/components/common/Button";
import Header from "../../../src/components/common/Header";
import base from "../../../src/base";
import Card from "../../../src/components/common/Card";
import { Dropdown } from "react-native-material-dropdown";
import Validation from "../../components/common/Validation";
import {onEnrollFieldChange,resetEnrolFom} from "../../actions";



class EnrolAssociation extends Component{
    constructor(props){
        super(props);
        this.state ={
   property_type:[ 
    {value: "Residential"},
    {value:"Commercial"},
    {value:"Residential Cum Commercial"}
]
        };
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


    render()
    {
        const{resetEnrolFom,onEnrollFieldChange,AssociationName,PropertyName,PropertyType,AssociationAddress,Country,State,City,Pincode,EmailID} = this.props;
        return(
<ScrollView>
            <View>
                 
             <Header>
              <Image resizeMode="contain" style={{ height: 10, width: 10 }} source = {require('../../icons/OyeSpace.png')}/>
             </Header>
              <View style={GlobalStyle.Title}  >
               <Text style={{ color: base.theme.colors.primary}}> Create Association </Text>
              </View>
              <View style={styles.rightContainer} >
                   <Button    
                    title="Next"
                    style={{ width: "20%", padding: 4 ,marginBottom:10}}
                    onPress = {()=> {
                        this.AssociationDetailsValidation()
                    }}
                    />      
              </View>
              <Card style ={{backgroundColor:"orange"}} > 
                  <View style ={GlobalStyle.Title} >
                  <Text style ={{color:base.theme.colors.white}}> Association Details</Text>
                  </View>
              </Card>

              <Card>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Association Name <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Association Name"
                       autoCapitalize="characters"
                       value={AssociationName}
                       onChangeText={AssociationName=> 
                        onEnrollFieldChange({
                            prop:"AssociationName",value:AssociationName
                        })
                    }
                       />
                  </View>
             
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Property Name <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Property Name"
                       value={PropertyName}
                       onChangeText={PropertyName=> 
                        onEnrollFieldChange({
                            prop:"PropertyName",value:PropertyName
                        })
                    }/>
                  </View>
                  {/* dropdown for property type */}
                  <View>
                      <Text>Property Type <Text style={{color:base.theme.colors.red}}>*</Text> </Text>
                      <Dropdown
                      placeholder="Select Property Type"
                      
                      dropdownOffset={{ top: 0, left: 0 }}
                      data ={this.state.property_type}
                      onChangeText={PropertyType => {
                          onEnrollFieldChange({
                              prop:"PropertyType",value:PropertyType
                          })
                      }}
                      />
                  </View>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Association Address <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Association Address"
                       value={AssociationAddress}
                       onChangeText={AssociationAddress=> 
                        onEnrollFieldChange({
                            prop:"AssociationAddress",value:AssociationAddress
                        })
                    }/>
                  </View>
                  {/* Country Dropdown */}
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Country <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Country"
                       value={Country}
                       onChangeText={Country=> 
                        onEnrollFieldChange({
                            prop:"Country",value:Country
                        })
                    }/>
                  </View>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> State <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter State"
                       value={State}
                       onChangeText={State=> 
                        onEnrollFieldChange({
                            prop:"State",value:State
                        })
                    }/>
                  </View>
                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> City <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter City"
                       value ={City}
                       onChangeText={City=> 
                        onEnrollFieldChange({
                            prop:"City",value:City
                        })
                    }/>
                  </View>

                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Pincode <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter Pincode"
                       value={Pincode}
                       onChangeText={Pincode=> 
                        onEnrollFieldChange({
                            prop:"Pincode",value:Pincode
                        })
                    }/>
                  </View>

                  <View style={GlobalStyle.cardContainerStyle}> 
                      <Text style={GlobalStyle.noMargins}> Email ID Of Associaiton <Text style={{color:base.theme.colors.red}}>*</Text></Text>
                      <TextInput style={GlobalStyle.noMargins}
                       placeholder ="Enter EmailID Of Association"
                       value={EmailID}
                       onChangeText={EmailID=> 
                        onEnrollFieldChange({
                            prop:"EmailID",value:EmailID
                        })
                    }/>
                  </View>

              </Card>
              <View style={{justifyContent:"center",flexDirection:"row",marginTop:20}}>
              <Button title="Reset"
              onPress ={()=>{
                resetEnrolFom() 
              }}
               />
              </View>
             
            </View> 

            </ScrollView>    
        );
    }

    AssociationDetailsValidation =()=>{
        const { AssociationName,AssociationAddress,PropertyName,Country,State,Pincode,EmailID }  = this.props;

                if(Validation.AlphaNumeric.test(AssociationName) === false || AssociationName.length < 3){
                    alert('Enter Valid Association Name')
                }
                else if (Validation.Alphabets.test(AssociationAddress) === false || AssociationAddress.length < 3){
                    alert('Enter Valid Association Address')
                }
                else if (Validation.Alphabets.test(PropertyName) === false || PropertyName.length < 3)
                {
                    alert('Enter Valid Property Name')
                } 
                else if(Validation.Alphabets.test(Country) === false || Country.length < 3)
                {
                    alert('Enter Valid Country')
                }
                else if(Validation.Alphabets.test(State) === false || State.length < 3)
                {
                    alert('Enter Valid State')
                }
                else if(Validation.Numeric.test(Pincode) === false || Pincode.length < 3)
                {
                    alert('Enter Valid Pincode')
                }
                else if(Validation.emailRegex.test(EmailID) === false){
                    alert('Enter Valid EmailID');
                }
                else {
                 this.props.navigation.navigate("PanDetails")
                }
            }
  
};

const styles = StyleSheet.create({
   
    rightContainer: {
        justifyContent: "flex-end", flexDirection: "row", marginRight: 10
      }
   
  });
  
  const mapStateToProps =state =>{
    return{
     AssociationName    : state.EnrollAssociationReducer.AssociationName,
     AssociationAddress : state.EnrollAssociationReducer.AssociationAddress, 
     PropertyName       : state.EnrollAssociationReducer.PropertyName,
     Country            : state.EnrollAssociationReducer.Country,
     State              : state.EnrollAssociationReducer.State,
     City               : state.EnrollAssociationReducer.City,
     Pincode            : state.EnrollAssociationReducer.Pincode,
     EmailID            : state.EnrollAssociationReducer.EmailID,
     PropertyType       : state.EnrollAssociationReducer.PropertyType,
    };
}


export default connect(mapStateToProps,{onEnrollFieldChange,resetEnrolFom})(EnrolAssociation);

