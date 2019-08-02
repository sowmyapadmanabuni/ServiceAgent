import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";
import EnrollAssociationReducer from "./EnrollAssociationReducer";
import DeviceReducer from "./DeviceReducer";
import AdminReducer from "./AdminReducer";

export default combineReducers({
    LoginReducer:LoginReducer,
    EnrollAssociationReducer :EnrollAssociationReducer,
    DeviceReducer: DeviceReducer,
    AdminReducer:AdminReducer
});