import React from 'react';
import { View, StyleSheet} from 'react-native';
import CheckBox from "./CheckBox";

const App = () => {
	return (
		<View style={styles.container}>
			<CheckBox
				name="checkbox1"
				checked={false}
				size={50}
				color='red' 
				style={{backgroundColor: 'white', borderRadius: 5,
				borderWidth: 2, margin: 10, borderColor: 'black'}}
				onChange={(name, checked) => console.log(name, checked)}
			/>
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
