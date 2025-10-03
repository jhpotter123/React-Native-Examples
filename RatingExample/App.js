import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Improved code from the react-native-ratings module, I needed to 
// be able to display SVG images in TapRating.  Couldn't figure that 
// out for SwipeRating but converted this one over to a functional 
// component.
import TapRating from './TapRating';
import SwipeRating from './SwipeRating';
// import { Rating, AirbnbRating } from 'react-native-ratings';

// Just some example code to figure some stuff out.
// import Drag from './Drag';
// import {LogoIcon} from './LogoIcon';
// import NewGesture from './NewGesture';
// import Animate from './Animate';

const GEAR_SELECTED = require('./gear-selected.png')
const GEAR_UNSELECTED = require('./gear-unselected.png')
const GEAR_IMAGE = require('./gear.png')

const App = (props) => {
	const [ starCount, setStarCount ] = useState(1);
	const [ starCountStr, setStarCountStr ] = useState("1");
	
	const onChangeText = (value) => {
		// console.log(value);
		setStarCount(Number(value));
		setStarCountStr(value);
	};

	const ratingCompleted = (value) => {
		// console.log(value);
		setStarCount(value);
		setStarCountStr(value.toString());
	};

	return (
		<View style={styles.container}>
			{/* Code for the ratings dialog */}
			<TapRating 
				showRating={false}
				type='custom'
				ratingCount={5}
				imageSize={15}
			/>

			{/* Code for the offers screen (requester), and the profile page on the serviceman app */}
			<View style={styles.rating}>
				<SwipeRating
					startingValue={starCount}
					readonly={true}
					type='custom'
					ratingImage={GEAR_IMAGE}
					ratingColor='black'
					ratingBackgroundColor='lightgray'
					minValue={1}
					ratingCount={5}
					imageSize={15}
					onFinishRating={ratingCompleted}
					style={{ paddingVertical: 10 }}
				/>
			</View>
			<Text>Rating:  {starCount.toFixed(1)} / 5.0</Text>
			<View style={styles.starContainer}>
				<TextInput style={styles.textInput}
					keyboardType="number-pad"
					value={starCountStr} 
					onChangeText={onChangeText} 
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	linearGradient: {
		justifyContent: 'center',
		flex: 1
	},
	container: {
		flex: 1,
		// paddingTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		borderWidth: 1,
	},
	starContainer: {
		width: '80%',
	},
	icon: {
		// backgroundColor: 'pink',
		width: 400,
		height: 400,
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center',

	}

});

export default App;
