import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Settings from "./Settings";
import Details from "./Details";
import ItemList from "./ItemList";
import ListContainer from "./ListContainer";
import Loading from "./Loading";
import MeasuringProgress from "./MeasuringProgress";
import UserInput from "./UserInput";
import Select from "./Select";

export default createAppContainer(
 //createStackNavigator({ Home, Settings }, { initialRouteName: "Home" });
 createStackNavigator({ Home, Details, ItemList, Settings, ListContainer, Loading, MeasuringProgress, UserInput, Select }, { initialRouteName: "Home" })
);
