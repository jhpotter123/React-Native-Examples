import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, 
	Easing, Dimensions } from "react-native";
// import Accordion from "./components/Accordion";

const HeightAnimation = () => {
	const { width, height } = Dimensions.get("window");

	const [boxHeight, setBoxHeight ] = useState(new Animated.Value(0));

	const heightAnimation = () => {
		Animated.timing(boxHeight, {
			toValue: 100,
			duration: 2000,
			useNativeDriver: true // Add This line
		}).start(() => {
			console.log('done');
		});
	};

	return (
		<View style={styles.container}>
			{/* <Accordion /> */}
			
			<TouchableOpacity style={styles.button} onPress={heightAnimation}>
				<Text style={styles.buttonText}>Expand</Text>
			</TouchableOpacity>
			<Animated.View style={[styles.animationView, {transform: [{ scaleY: boxHeight}]}]} />

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: "center",
		paddingTop: 200,
	},
	animationView: {
		width: Dimensions.get("window").width,
		height: 0.0001,
		backgroundColor: "skyblue",
	},
	button: {
		backgroundColor: "steelblue",
		height: 45,
		marginTop: 20,
		alignSelf: "center",
		borderRadius: 5,
		width: 150,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		paddingVertical: 12,
		paddingHorizontal: 20,
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default HeightAnimation;
