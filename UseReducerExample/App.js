import React, { useState, useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, {count: 0});

	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<TouchableOpacity style={styles.button} onPress={() => dispatch({type:ACTIONS.INCREMENT})}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.itemContainer}>
				<Text style={styles.textLabel}>{state.count}</Text>
			</View>
			<View style={styles.itemContainer}>
				<TouchableOpacity style={styles.button} onPress={() => dispatch({type:ACTIONS.DECREMENT})}>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	itemContainer: {
		maxHeight: 100,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
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
	textLabel: {
		fontSize: 30
	},
	buttonContainer: {
		width: 50,
		height: 50,
		// backgroundColor: 'skyblue'
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
