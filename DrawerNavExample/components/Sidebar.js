import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const Sidebar = (props) => (
	<ScrollView>
		<ImageBackground  
			source={require('../assets/background.png')} 
			style={styles.profileBackgound}>
			<Image 
				source={require('../assets/profile.png')}
				style={styles.profilePic}>
			</Image>
			<Text style={styles.header}>Jeffrey Potter</Text>
			<View style={styles.subHeader}>
				<Text style={styles.followersText}>700 Followers</Text>
				<Ionicons name="md-people" size={16} color={Colors.accent} />
			</View>
		</ImageBackground>
		<DrawerContentScrollView {...props} contentContainerStyle={styles.items}>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	</ScrollView>
);

const styles = StyleSheet.create({
	items: {
		flex: 1,
	},
	profileBackgound: {
		width: undefined, 
		padding: 16, 
		paddingTop: 48
	},
	profilePic: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: Colors.accent,
		marginLeft: 10

	},
	header: {
		color: Colors.accent,
		fontSize: 20,
		fontWeight: "800",
		marginVertical: 8,
		marginLeft: 10
	},
	subHeader: {
		flexDirection:'row'
	},
	followersText: {
		color: Colors.accent,
		fontSize: 13,
		marginLeft: 10
	}
});

export default Sidebar;
