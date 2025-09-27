import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
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

import Splash from './screens/Splash';

import Data from './components/Data';

const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
	<Drawer.Navigator
	  drawerContent={(props) => <Sidebar {...props} />}
	  screenOptions={{
		drawerActiveBackgroundColor: Colors.sideBarItemBackgroundColor,
		drawerActiveTintColor: Colors.sideBarItemTintColor,
		drawerStyle: { width: Dimensions.get('window').width * 0.75 },
	  }}
	>
	  <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: ({ color }) => <Feather name="user" size={16} color={color} /> }} />
	  <Drawer.Screen name="Message" component={MessageScreen} options={{ drawerIcon: ({ color }) => <Feather name="message-square" size={16} color={color} /> }} />
	  <Drawer.Screen name="Activity" component={ActivityScreen} options={{ drawerIcon: ({ color }) => <Feather name="activity" size={16} color={color} /> }} />
	  <Drawer.Screen name="List" component={ListScreen} options={{ drawerIcon: ({ color }) => <Feather name="list" size={16} color={color} /> }} />
	  <Drawer.Screen name="Report" component={ReportScreen} options={{ drawerIcon: ({ color }) => <Feather name="bar-chart" size={16} color={color} /> }} />
	  <Drawer.Screen name="Statistic" component={StatisticScreen} options={{ drawerIcon: ({ color }) => <Feather name="trending-up" size={16} color={color} /> }} />
	  <Drawer.Screen name="SignOut" component={SignOutScreen} options={{ drawerIcon: ({ color }) => <Feather name="log-out" size={16} color={color} /> }} />
	</Drawer.Navigator>
  );
}

const App = () => {
  return (
	<Data.Provider value={{}}>
	  <NavigationContainer>
		<Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <Sidebar {...props} />}>
		  <Drawer.Screen name="Splash" component={Splash} />
		  <Drawer.Screen name="Main" component={DrawerScreens} />
		</Drawer.Navigator>
	  </NavigationContainer>
	</Data.Provider>
  );
};

export default App;
