import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-action-sheet';

const App = () => {
	let BUTTONSiOS = [
		'Option 0',
		'Option 1',
		'Option 2',
		// 'Delete',
		'Cancel'
	];
	
	// let BUTTONSandroid = [
	// 	'Option 0',
	// 	'Option 1',
	// 	'Option 2'
	// ];
	
	// let DESTRUCTIVE_INDEX = 3;
	let CANCEL_INDEX = 4;
	
	const clickedActionSheet = () => {
		ActionSheet.showActionSheetWithOptions({
			options: BUTTONSiOS,
			cancelButtonIndex: CANCEL_INDEX,
			// destructiveButtonIndex: DESTRUCTIVE_INDEX,
			tintColor: 'blue'
		},
		(buttonIndex) => {
			if ( buttonIndex !== undefined ) {
				console.log('button clicked :', buttonIndex);
			}
			else {
				console.log('clicked outside the action sheet so no index');
			}
		});
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity 
				style={styles.button} 
				onPress={clickedActionSheet}
			>
				<Text style={styles.buttonText}>Select</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: 'black',
		width: 200,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10
	},
	buttonText: {
		color: 'white',
	},
});

export default App;
