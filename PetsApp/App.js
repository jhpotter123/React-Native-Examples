import React, { useState, useReducer, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Pets from "./components/Pets";

const App = (props) => {
	const [showPets, setShowPets] = useState(true);
	const toggle = () => {
		setShowPets(state => !state);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={toggle}>
				<Text style={styles.buttonText}>{showPets ? "hide" : "show"}</Text>
			</TouchableOpacity>
			{showPets && <Pets /> }
			{/* <Pets /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 200,
	},
	button: {
		width: 100,
		height: 40,
		backgroundColor: 'black',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
		buttonText: {
		color: 'white',
	},
});

export default App;
