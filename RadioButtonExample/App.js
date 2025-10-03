import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButtons from './components/RadioButtons'

const radioOptions1 = {
	options:[{ key: 'male', icon: 'icon-male' },
	{ key: 'female', icon: 'icon-female' }],
	default:'male'
};
const radioOptions2 = {
	options:[{ key: 'car', icon: 'icon-car' },
	{ key: 'moto', icon: 'icon-moto' },
	{ key: 'truck', icon: 'icon-truck' }],
	default:'car'
};

const App = () => {
	return (
		<View style={styles.container}>
			{/* <RadioButton options={radioOptions1.options} default={radioOptions1.default} /> */}
			<RadioButtons options={radioOptions2.options} default={radioOptions2.default} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default App;
