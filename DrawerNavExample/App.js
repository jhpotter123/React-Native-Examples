import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { BackHandler } from 'react-native';
import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen,
} from './screens';

import Sidebar from './components/Sidebar';
import Colors from './constants/Colors';

// import Splash from './screens/Splash';

import Data from './components/Data';

const Drawer = createDrawerNavigator();

const App = () => {
	// navigation ref so we can handle Android back/gesture events
	const navigationRef = useRef(createNavigationContainerRef());
	useEffect(() => {
		// Intercept hardware back button (Android) so that an accidental
		// edge-swipe/back does not dismiss JS views to a blank/white screen.
		const onBackPress = () => {
			// Only intercept back presses when the JS navigation cannot go back
			// (i.e., user is at root). In that case, open the drawer instead of
			// letting the OS back gesture potentially blank the JS view.
			if (navigationRef.current.isReady()) {
				try {
					if (!navigationRef.current.canGoBack()) {
						navigationRef.current.dispatch(DrawerActions.openDrawer());
						return true;
					}
					// Let navigation handle the back action when it can go back.
					return false;
				} catch (e) {
					// If anything goes wrong, swallow the back event to avoid
					// accidentally leaving the app and showing a blank screen.
					return true;
				}
			}
			// Navigation not ready — prevent exit to avoid blank screen
			return true;
		};

		BackHandler.addEventListener('hardwareBackPress', onBackPress);
		return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Data.Provider value={{}}>
				<NavigationContainer ref={navigationRef}>
					{/* {<DrawerScreens />} */}
					<Drawer.Navigator
						drawerContent={(props) => <Sidebar {...props} />}
						screenOptions={{
							drawerActiveBackgroundColor: Colors.sideBarItemBackgroundColor,
							drawerActiveTintColor: Colors.sideBarItemTintColor,
							drawerStyle: { width: Dimensions.get('window').width * 0.75 },
							// allow swiping from the edge to open the drawer; increase edge area so
							// a single swipe from near the edge reliably opens the drawer on all screens
							swipeEnabled: true,
							// number of pixels from the edge where a swipe will open the drawer
							swipeEdgeWidth: 120,
							// ensure drawer appears over the current screen when opened
							drawerType: 'front',
						}}
					>
						{/* {loadItems()} */}
						<Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: ({ color }) => <Feather name="user" size={16} color={color} /> }} />
						<Drawer.Screen name="Message" component={MessageScreen} options={{ drawerIcon: ({ color }) => <Feather name="message-square" size={16} color={color} /> }} />
						<Drawer.Screen name="Activity" component={ActivityScreen} options={{ drawerIcon: ({ color }) => <Feather name="activity" size={16} color={color} /> }} />
						<Drawer.Screen name="List" component={ListScreen} options={{ drawerIcon: ({ color }) => <Feather name="list" size={16} color={color} /> }} />
						<Drawer.Screen name="Report" component={ReportScreen} options={{ drawerIcon: ({ color }) => <Feather name="bar-chart" size={16} color={color} /> }} />
						<Drawer.Screen name="Statistic" component={StatisticScreen} options={{ drawerIcon: ({ color }) => <Feather name="trending-up" size={16} color={color} /> }} />
						<Drawer.Screen name="SignOut" component={SignOutScreen} options={{ drawerIcon: ({ color }) => <Feather name="log-out" size={16} color={color} /> }} />
					</Drawer.Navigator>
				</NavigationContainer>
			</Data.Provider>
		</GestureHandlerRootView>
	);
};

export default App;
