import React, { Fragment } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const users = [
	{ id: 0, name: "Test User0" },
	{ id: 1, name: "Test User1" },
	{ id: 2, name: "Test User2" },
	{ id: 3, name: "Test User3" },
	{ id: 4, name: "Test User4" },
	{ id: 5, name: "Test User5" }
];

const App = () => {
	return (
		<View style={styles.container}>
			{users.map(user => (
				<View key={user.id} style={styles.itemContainer}>
					<View style={styles.textContainer}>
						<Text>{user.name}</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Button title="Edit" />
					</View>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flex: 1,
	},
	itemContainer: {
		flexDirection: 'row',
		maxHeight: 50,
		justifyContent: "center",
		// backgroundColor:'red',
	},
	itemSize: {
		width: 100,
		height: 100,
	},
	textContainer: {
		width: 200,
		// backgroundColor: 'powderblue'
	},
	buttonContainer: {
		width: 50,
		height: 50,
		// backgroundColor: 'skyblue'
	}
});

export default App;
