/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { useScreens } from "react-native-screens";
import { name as appName } from "./app.json";

useScreens();

AppRegistry.registerComponent(appName, () => App);
