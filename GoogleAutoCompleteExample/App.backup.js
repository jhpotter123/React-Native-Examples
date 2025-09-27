import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceSearch from './PlaceSearch';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from "react-native-vector-icons/Ionicons";

const API_KEY = "AIzaSyDUGHr6OtvRQkyGgF0Q-cNK14eiJsFCvXk";
const COUNTRY_CODE = 'HR';

const App = (props) => {
	return (
		<View style={styles.container}>
			{/* <AntDesign name="search1" size={40} color="#900" />
			<Entypo name="location-pin" size={40} color="#900" />
			<Ionicons name="md-menu" size={30} />
			<FontAwesome name="rocket" size={30} color="#900" /> */}

			<PlaceSearch 
				apikey={API_KEY} // required *
				selectedAddress={(data)=>console.log(JSON.stringify(data))} // required *
				country ={COUNTRY_CODE} //optional
				searchIconStyle={styles.searchIconStyle} //optional
				mainInputContainer={styles.mainInputContainer} //optional
				inputContainer={styles.inputContainer} //optional
				textInput={styles.textInput} //optional
				resultsScrollView={styles.resultsScrollView} //optional
				listStyle={styles.listStyle} //optional
				listItemBody={styles.listItemBody} //optional
				listTextStyle={styles.listTextStyle} //optional
				listIconStyle={styles.listIconStyle} //optional
				imgStyle={styles.imgStyle} //optional
			/>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	searchIconStyle: {
	},
	mainInputContainer: {
		backgroundColor:'purple',
	},
	inputContainer: {
	},
	textInput: {
	},
	resultsScrollView: {
	},
	listStyle: {
	},
	listStyle: {
	},
	listTextStyle: {
	},
	listIconStyle: {
	},
	imgStyle: {
	},
});

export default App;
