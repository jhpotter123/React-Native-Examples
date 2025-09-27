import React from 'react';
import { View, StyleSheet } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function App() {
	return (
		<View style={styles.constiner}>
			<AntDesign name="search1" size={40} color="#900" />
			<Entypo name="location-pin" size={40} color="#900" />
			<Ionicons name="md-menu" size={30} />
			<FontAwesome name="rocket" size={30} color="#900" />
		</View>
	)
}

const styles = StyleSheet.create({
	constiner: {
		// paddingTop: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default App;
