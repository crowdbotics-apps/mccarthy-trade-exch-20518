import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile104815Navigator from '../features/UserProfile104815/navigator';
import Tutorial104814Navigator from '../features/Tutorial104814/navigator';
import NotificationList104786Navigator from '../features/NotificationList104786/navigator';
import Settings104785Navigator from '../features/Settings104785/navigator';
import Settings104777Navigator from '../features/Settings104777/navigator';
import UserProfile104775Navigator from '../features/UserProfile104775/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile104815: { screen: UserProfile104815Navigator },
Tutorial104814: { screen: Tutorial104814Navigator },
NotificationList104786: { screen: NotificationList104786Navigator },
Settings104785: { screen: Settings104785Navigator },
Settings104777: { screen: Settings104777Navigator },
UserProfile104775: { screen: UserProfile104775Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
