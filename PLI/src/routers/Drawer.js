import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import ListProfileContainer from "../containers/ListProfileContainer.js";
import ProfileContainer from "../containers/ProfileContainer.js";

const MainDrawerRouter = DrawerNavigator(
  {
    ListProfile: {screen: ListProfileContainer},
    Profile: {screen: ProfileContainer},
  },
  {
    initialRouteName: "ListProfile",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawerRouter;
