import React, { createContext, useState } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

import {
	ProfileScreen, 
	MessageScreen, 
	ActivityScreen, 
	ListScreen, 
	ReportScreen, 
	StatisticScreen, 
	SignOutScreen
} from "./screens";

import Sidebar from "./components/Sidebar";
import Colors from './constants/Colors';

import Splash from "./screens/Splash";

import Data from "./components/Data";

const DrawerNavigator = createDrawerNavigator({
	ProfileScreen: {
		screen: ProfileScreen,
		navigationOptions: {
			title: "Profile",
			drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
		}
	}, 
	MessageScreen: {
		screen: MessageScreen,
		navigationOptions: {
			title: "Message",
			drawerIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor} />
		}
	}, 
	ActivityScreen: {
		screen: ActivityScreen,
		navigationOptions: {
			title: "Activity",
			drawerIcon: ({tintColor}) => <Feather name="activity" size={16} color={tintColor} />
		}
	}, 
	ListScreen: {
		screen: ListScreen,
		navigationOptions: {
			title: "List",
			drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor} />
		}
	}, 
	ReportScreen: {
		screen: ReportScreen,
		navigationOptions: {
			title: "Report",
			drawerIcon: ({tintColor}) => <Feather name="bar-chart" size={16} color={tintColor} />
		}
	}, 
	StatisticScreen: {
		screen: StatisticScreen,
		navigationOptions: {
			title: "Statistic",
			drawerIcon: ({tintColor}) => <Feather name="trending-up" size={16} color={tintColor} />
		}
	}, 
	SignOutScreen: {
		screen: SignOutScreen,
		navigationOptions: {
			title: "SignOut",
			drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
		}
	}
},{
	contentComponent: props => <Sidebar {...props} />,
	drawerWidth: Dimensions.get("window").width * 0.75,
	hideStatusBar: true,
	contentOptions: {
		activeBackgroundColor: Colors.sideBarItemBackgroundColor,
		activeTintColor: Colors.sideBarItemTintColor,
		itemsContainerStyle: {
			marginTop: 16,
			marginHorizontal: 8
		},
		itemsStyle: {
			borderRadius: 4
		}
	}
});

const AppSwitchNavigator = createSwitchNavigator({
	'Splash' : { screen: Splash },
	'Drawer' : { screen: DrawerNavigator }
},
{
	initialRouteName: 'Splash'
	// Telling the navigator that the first route is Splash screen
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const App = () => {
	// SOMETHING:"THIS"
	return (
		<Data.Provider value={{}}>
			<AppContainer />
		</Data.Provider>
	);
};

export default App;
