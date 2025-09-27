import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Button</Text>
			</TouchableOpacity>
			<Text>Testing123</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
