// import React,{Component} from "react";
// import {View, Text} from "react-native";
// import Header from "../../components/common";


// const blockTemplate ={
//     block_name:"",
//     noofunits:""
// };

// class CreateBlock extends Component{
//     constructor(props){
//         super(props);
//     }

//     render() {
//         return (
//             <View key={index + "bank"} style={{ marginVertical: 15 }}>
//               <View
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   marginBottom: "5%"
//                 }}
//               >
//                 <Text style={{ color: "#00B9CC", fontWeight: "400" }}>
//                   Bank {index + 1}
//                 </Text>
//                 <MaterialCommunityIcons
//                   size={20}
//                   name="delete-forever-outline"
//                   color="orange"
//                 />
//               </View>
//               <Text> Bank Name</Text>
//               <View
//                 style={{
//                   backgroundColor: "#e7e7e7",
//                   marginVertical: 10,
//                   marginTop: 0,
//                   paddingHorizontal: 13
//                 }}
//               >
//                 <TextInput
//                   placeholder="Select Bank"
//                   value={data.BABName}
//                   underlineColorAndroid="transparent"
//                   onChangeText={bankname => {
//                     let oldDetails = [...allbanks];
//                     // let oldDetails = Object.assign([], allbanks);
//                     oldDetails[index].BABName = bankname;
    
//                     // onAssociationFieldsChange({
//                     //   prop: "bank_details",
//                     //   value: oldDetails
//                     // });
//                   }}
//                 />
//               </View>
//               <View style={{ flexDirection: "row", marginTop: 14 }}>
//                 <View style={{ flex: 1, marginRight: 7 }}>
//                   <Text> IFSC </Text>
//                   <View
//                     style={{
//                       flex: 1,
//                       borderWidth: 0.5,
//                       borderColor: "#777",
//                       paddingHorizontal: 13
//                     }}
//                   >
//                     <TextInput
//                       placeholder="IFSC"
//                       value={data.BAIFSC}
//                       underlineColorAndroid="transparent"
//                       onChangeText={ifsc => {
//                         let oldDetails = [...allbanks];
//                         // let oldDetails = Object.assign([], allbanks);
//                         oldDetails[index].BAIFSC = ifsc;
    
//                         onAssociationFieldsChange({
//                           prop: "bank_details",
//                           value: oldDetails
//                         });
//                       }}
//                     />
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     marginLeft: 7,
//                     flex: 1
//                   }}
//                 >
//                   <Text> Account Number </Text>
//                   <View
//                     style={{
//                       flex: 1,
//                       borderWidth: 0.5,
//                       borderColor: "#777",
//                       paddingHorizontal: 13
//                     }}
//                   >
//                     <TextInput
//                       placeholder="Acount Number"
//                       value={data.BAActNo}
//                       underlineColorAndroid="transparent"
//                       onChangeText={accountNo => {
//                         let oldDetails = [...allbanks];
//                         // let oldDetails = Object.assign([], allbanks);
//                         oldDetails[index].BAActNo = accountNo;
    
//                         onAssociationFieldsChange({
//                           prop: "bank_details",
//                           value: oldDetails
//                         });
//                       }}
//                     />
//                   </View>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   marginTop: 13,
//                   backgroundColor: "#fff"
//                 }}
//               >
//                 <View style={{ flex: 1, marginTop: 5 }}>
//                   {/* <Text style={}> Account Type </Text> */}
//                   <Dropdown
//                     onChangeText={accountType => {
//                       let oldDetails = [...allbanks];
//                       // let oldDetails = Object.assign([], allbanks);
//                       oldDetails[index].BAActType = accountType;
    
//                       onAssociationFieldsChange({
//                         prop: "bank_details",
//                         value: oldDetails
//                       });
//                     }}
//                     label="Account Type"
//                     inputContainerStyle={{
//                       borderBottomColor: "transparent"
//                     }}
//                     value={data.BAActType}
//                     containerStyle={{
//                       margin: 0,
//                       width: "100%",
//                       flex: 1,
//                       marginTop: 10,
//                       backgroundColor: "#e7e7e7",
//                       paddingTop: 9,
//                       paddingHorizontal: 7
//                     }}
//                     pickerStyle={{ paddingHorizontal: 10 }}
//                     dropdownMargins={{ min: 0, max: 0 }}
//                     dropdownOffset={{ top: 0, left: 0 }}
//                     data={this.state.accountType}
//                     style={{ margin: 0, padding: 0, borderColor: "transparent" }}
//                   />
//                 </View>
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: "flex-end",
//                     alignItems: "flex-end",
//                     backgroundColor: "#fff"
//                   }}
//                 >
//                   <CheckBox
//                     containerStyle={{
//                       backgroundColor: "#fff",
//                       borderColor: "transparent"
//                     }}
//                     center
//                     title="Default "
//                     checkedIcon="dot-circle-o"
//                     uncheckedIcon="circle-o"
//                     checked={data.default}
//                     checkedColor="orange"
//                     uncheckedColor="orange"
//                     onPress={() => {
//                       let oldDetails = [...allbanks];
//                       // let oldDetails = Object.assign([], allbanks);
//                       oldDetails[index].default = !data.default;
    
//                       onAssociationFieldsChange({
//                         prop: "bank_details",
//                         value: oldDetails
//                       });
//                     }}
//                   />
//                 </View>
//               </View>
//               <TouchableWithoutFeedback
//                 onPress={() => {
//                   let oldDetails = [...allbanks];
//                   oldDetails.push(bankTemplate);
//                 //   onAssociationFieldsChange({
//                 //     prop: "bank_details",
//                 //     value: oldDetails
//                 //   });
//                 }}
//               >
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "flex-end",
//                     alignItems: "center"
//                   }}
//                 >
//                   <AntDesign name="plus" color="#00B9CC" size={18} />
//                   <Text style={{ color: "#00B9CC" }}> Add Bank </Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             </View>
//           );
//         };
// }

