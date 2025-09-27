import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Splash = (props) => {
	useEffect(() => {
		const fetchData = async () => {
			// You can load api data or any other thing here if you want
			const data = await navigateToHome();
			if (data !== null) {
				props.navigation.navigate("Home");
			}
		};
		
		fetchData();
	}, []);
	
	const navigateToHome = async () => {
		// Splash screen will remain visible for 2 seconds
		const wait = time => new Promise((resolve) => setTimeout(resolve, time));
		return wait(100).then(() => props.navigation.navigate("Home"))
	};
	
	return (
		<View style={styles.container} />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.bgSplashColor,
	},
});

export default Splash;
