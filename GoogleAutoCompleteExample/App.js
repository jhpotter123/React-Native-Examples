import React from 'react';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaceSearch from './PlaceSearch';
import { GeoCoder } from './Geocoder';

const API_KEY = "AIzaSyDUGHr6OtvRQkyGgF0Q-cNK14eiJsFCvXk";
const COUNTRY_CODE = 'US';

const App = (props) => {
	const selectedAddress = async(data) => {
		let res = await GeoCoder.geocode_address_and_parse(API_KEY, COUNTRY_CODE, data);

		console.log(data);
		console.log(res);
	};

	return (
		<View style={styles.container}>
			<PlaceSearch 
				apikey={API_KEY} // required *
				selectedAddress={selectedAddress} // required *
				searchIcon={<AntDesign name="search1" style={[styles.searchIconStyle, props.searchIconStyle]}/>} //optional
				listEntryIcon={<Entypo name="location-pin" style={[styles.listIconStyle,props.listIconStyle]} />} //optional
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
			/>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	searchIconStyle: {
		marginLeft:20,
		fontSize:20
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
	listIconStyle : {
		// color:'#474444'
	},
	imgStyle: {
	},
});

export default App;
