import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const PlaceSearch = (props) => {
	const [ country, setCountry ] = useState(props.country ? '&components=country:'+props.country+'&': '&');
	const [ address, setAddress ] = useState('');
	const [ allAddress, setAllAddress ] = useState([]);

	const searchAddress = async() => {
		let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+address+country+'key='+props.apikey;
		let response = await fetch(url);
		let responseJson = await response.json();
		setAllAddress(responseJson.predictions);
	}

	const addressSelected = async(data) => {
		setAddress(data.description);
		props.selectedAddress(data.description);
	}

	// The original code used native-base and displayed the results in a scroll view.
	// I removed this dependancy and simply just output results in a FlatList since 
	// this is built into react native.
	// import { Body, ListItem} from 'native-base';
	// <ScrollView style={[styles.resultsScrollView, props.resultsScrollView]} showsVerticalScrollIndicator={false}>
	// 	{allAddress.map((item,index)=>
	// 		<ListItem key={index} 
	// 			style={[styles.listStyle,props.listStyle]}
	// 			onPress={()=>addressSelected(item)}>
	// 			<Body style={[styles.listItemBody, props.listItemBody]}>
	// 				{props.listEntryIcon}
	// 				<Text style={[styles.listTextStyle,props.listTextStyle]}>{item.description}</Text>
	// 			</Body>
	// 		</ListItem>
	// 	)}
	// </ScrollView>

	return (
		<Fragment>
			<View style={[styles.mainInputContainer,props.mainInputContainer]}>
				<View style={[styles.inputContainer,props.inputContainer]}>
					{props.searchIcon}
					<TextInput style={[styles.textInput,props.textInput]}
					placeholder="Search"
					underlineColorAndroid='transparent'
					onKeyPress={()=>searchAddress()}
					value={address}
					onChangeText={(address) => setAddress(address)}/>
				</View>
			</View>
			<FlatList
				data={allAddress}
				renderItem={({ item, index }) => 
					<TouchableOpacity 
						style={[styles.listStyle,props.listStyle]}
						onPress={() => addressSelected(item)}>
						{props.listEntryIcon}
						<Text style={[styles.listTextStyle,props.listTextStyle]}>{item.description}</Text>
					</TouchableOpacity>
				}
				keyExtractor={(item, index) => item.place_id || index.toString()}
			/>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	mainInputContainer: {
		borderColor:'#76a044',
		flexDirection: 'row',
		alignItems:'center',
		backgroundColor:'#76a044'
	},
	inputContainer : {
		flex:1,
		backgroundColor:'#fff',
		marginHorizontal:15,
		marginVertical:10,
		flexDirection:'row',
		alignItems:'center',
		borderRadius:10
	},
	textInput:{
		height:45,
		width:'80%',
		backgroundColor:'#fff',
		marginLeft:10,
		marginRight:10,
		color: '#333333'
	},
	resultsScrollView: {
		zIndex:999,
	},
	listStyle : {
		flexDirection:'row',
		alignItems:'center',
		backgroundColor:'#f2f2f2',
		height: 50,
		borderTopColor: '#ffffff',
		borderWidth: .2,
		paddingHorizontal:10,
	},
	listItemBody: {
		flexDirection:'row',
		alignItems:'center',
		paddingHorizontal:5
	},
	listTextStyle : {
		fontSize:13,
		marginHorizontal:7,
		color: '#333333'
	},
});

export default PlaceSearch;
