import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, 
	Easing, Dimensions } from "react-native";

const AnimationExample = () => {
	const { width, height } = Dimensions.get("window");
	// console.log(Dimensions.get("window").width);

	const [boxHeight, setBoxHeight ] = useState(new Animated.Value(0));
	const [fadeValue, setFadeValue ] = useState(new Animated.Value(0));
	const [xValue, setXValue] = useState(new Animated.Value(0));
	const [springValue, setSpringValue] = useState(new Animated.Value(0.3));

	const heightAnimation = () => {
		Animated.timing(boxHeight, {
			toValue: 100,
			duration: 2000,
			useNativeDriver: true // Add This line
		}).start(() => {
			// reset();
			console.log('done');
		});
	};

	const fadeAnimation = () => {
		Animated.timing(fadeValue, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true // Add This line
		}).start(() => {
			reset();
			console.log('done');
		});
	};

	const moveAnimation = () => {
		Animated.timing(xValue, {
			toValue: width - 100,
			duration: 1000,
			easing: Easing.cubic,
			useNativeDriver: true // Add This line
		}).start(() => {
			Animated.timing(xValue, {
				toValue: 0,
				duration: 1000,
				easing: Easing.cubic,
				useNativeDriver: true // Add This line
			}).start(() => {
				reset();
				console.log('done');
			});
		});
	};

	const springAnimation = () => {
		Animated.spring(springValue, {
			toValue: 1,
			friction: 1,
			// duration: 2000,
			useNativeDriver: true // Add This line
		}).start(() => {
			reset();
			console.log('done');
		});
	};

	const reset = () => {
		setBoxHeight(new Animated.Value(0));
		setFadeValue(new Animated.Value(0));
		setXValue(new Animated.Value(0));
		setSpringValue(new Animated.Value(0.3));
	};

	return (
		<View style={styles.container}>			
			{/* <Animated.View style={[styles.animationView, {transform: [{ scaleY: boxHeight}]}]} />
			<TouchableOpacity style={styles.button} onPress={heightAnimation}>
				<Text style={styles.buttonText}>Expand</Text>
			</TouchableOpacity> */}

			{/* <Animated.View style={[styles.animationView, {alignSelf: "center", opacity: fadeValue}]} />
			<TouchableOpacity style={styles.button} onPress={fadeAnimation}>
				<Text style={styles.buttonText}>Animate</Text>
			</TouchableOpacity> */}

			{/* <Animated.View style={[styles.animationView, {transform: [{ translateX: xValue}]}]} />
			<TouchableOpacity style={styles.button} onPress={moveAnimation}>
				<Text style={styles.buttonText}>Animate</Text>
			</TouchableOpacity> */}

			{/* <Animated.Image
				source={require("./assets/images/react-native.png")}
				style={[styles.imageView, {transform: [{ translateX: xValue}]}]}
			/>
			<TouchableOpacity style={styles.button} onPress={moveAnimation}>
				<Text style={styles.buttonText}>Animate</Text>
			</TouchableOpacity> */}

			{/* <Animated.Image
				source={require("./assets/images/react-native.png")}
				style={[styles.imageView, {alignSelf: "center", transform: [{ scale: springValue}]}]}
			/>
			<TouchableOpacity style={styles.button} onPress={springAnimation}>
				<Text style={styles.buttonText}>Animate</Text>
			</TouchableOpacity> */}

			{/* <TouchableOpacity style={styles.button} onPress={reset}>
				<Text style={styles.buttonText}>Reset</Text>
			</TouchableOpacity> */}

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
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
	imageView: {
		width: 100,
		height: 100,
		backgroundColor: "transparent",
	}
});

export default AnimationExample;
