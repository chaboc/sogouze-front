import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import ListProfileContainer from "../containers/ListProfileContainer";
import ListConversationContainer from "../containers/ListConversationContainer";
import ProfileContainer from "../containers/ProfileContainer";
import LoginContainer from "../containers/LoginContainer";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const MainDrawerRouter = DrawerNavigator(
  {
    ListConversation: {screen: ListConversationContainer},
    ListProfile: {screen: ListProfileContainer},
    Profile: {screen: ProfileContainer},
    Login: {screen: LoginContainer},
  },
  {
    initialRouteName: "Login",
    transitionConfig
  }
);

export default MainDrawerRouter;
