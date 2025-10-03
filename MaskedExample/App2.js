import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
	const [selection, setSelection] = useState(null);

	const onSelectionChange = (value) => {
		setSelection(value);
	};

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
			style={{ paddingBottom: 10 }}>
			<View>
				<Text>Some text with different length in different cases, or some input fileds.</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
				<Text>testing123</Text>
			</View>
			<View style={{ flexDirection: "row" }}>
				<View style={{ flex: 1, paddingHorizontal: 10 }}>
					<TouchableOpacity style={styles.greenButton}>
						<Text style={styles.greenButtonTitle}>Next</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, paddingHorizontal: 10 }}>
					<TouchableOpacity style={styles.cancelButtonContainer}>
						<Text style={styles.cancelButton}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	greenButton: {
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		borderRadius: 5,
		// width: "50%",
	},
	greenButtonTitle: {
		fontSize: 20,
	},
	cancelButtonContainer: {
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		borderRadius: 5,
		// width: "50%",
	},
	cancelButton: {
		fontSize: 20,
	},
});

export default App;
