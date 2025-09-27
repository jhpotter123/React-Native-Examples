import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Countdown from "./components/Countdown";

const App = () => {
	const [ complete, setComplete ] = useState(false);
	const onExpire = () => {
		setComplete(true);
		console.log('completed');
	};

	return (
		<View style={styles.container}>
			{!complete && <Countdown
				initialMilliseconds={20000}
				onExpire={onExpire}
			/>}
			{complete && <Text>Completed</Text>}
			<TouchableOpacity style={styles.button} onPress={() => setComplete(false)}>
				<Text style={styles.text}>Reset</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		backgroundColor: 'black',
		borderRadius: 5,
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
	}

});

export default App;
