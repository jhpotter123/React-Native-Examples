import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
	useEffect(() => {
		// Hide the splash screen after 3 seconds for demo purposes
		setTimeout(() => {
			SplashScreen.hide();
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Text>Do Stuff here...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
