import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import Data from '../components/Data';

const Screen = (props) => {
	const data = useContext(Data);

	useEffect(() => {
		console.log("TTTT IN HERE:  ")
		console.log(JSON.stringify(data));		
	}, [data]);

	return (
		<View style={styles.screen}>
			<SafeAreaView style={styles.container}>
				{/* Header */}
				<TouchableOpacity
					style={styles.header} 
					onPress={props.navigation.openDrawer}>
					<FontAwesome5 name="bars" size={24} color={Colors.primary} />
				</TouchableOpacity>
				{/* Body */}
				<View style={styles.body}>
					<Text style={styles.text}>{props.name} Screen</Text>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		marginTop: 20,
		flex: 1,
		backgroundColor: Colors.accent
	},
	container: {
		flex: 1
	},
	header: {
		alignItems: "flex-start", 
		margin: 16
	},
	body: {
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center"
	},
	text: {
		color: Colors.primary,
		fontSize: 20,
		fontWeight: "500"
	}
});

export default Screen;
