import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps213792Navigator from '../features/Maps213792/navigator';
import Settings213770Navigator from '../features/Settings213770/navigator';
import Settings213755Navigator from '../features/Settings213755/navigator';
import NotificationList213754Navigator from '../features/NotificationList213754/navigator';
import Maps213753Navigator from '../features/Maps213753/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps213792: { screen: Maps213792Navigator },
Settings213770: { screen: Settings213770Navigator },
Settings213755: { screen: Settings213755Navigator },
NotificationList213754: { screen: NotificationList213754Navigator },
Maps213753: { screen: Maps213753Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
