import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import ListProfileContainer from "../containers/ListProfileContainer.js";
import ListConversationContainer from "../containers/ListConversationContainer.js";
import ProfileContainer from "../containers/ProfileContainer.js";

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
  },
  {
    initialRouteName: "ListProfile",
    transitionConfig
  }
);

export default MainDrawerRouter;
