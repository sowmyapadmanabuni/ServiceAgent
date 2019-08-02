import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from "./screens/Login";
import OtpScreen from "./screens/Auth/OtpScreen";
import EnrolAssociation from "./screens/Association/EnrolAssociation";
import AddDevice from "./screens/DeviceManagement/AddDevice";
import PanDetails from "./screens/Association/PanDetails";
import BlockDetails from "./screens/Association/BlockDetails";
import AdministratorDetails from "./screens/Association/AdministratorDetails";

const AppNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({}) => ({
        title: "Login"
      })
    },

    Otp: {
      screen: OtpScreen
    },
    Association: {
      screen: EnrolAssociation
    },
    EnrolDevice: {
      screen: AddDevice
    },
    PanDetails: {
      screen: PanDetails
    },
    BlockDetails: {
      screen: BlockDetails
    },
    AdminDetails: {
      screen: AdministratorDetails
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigation);
