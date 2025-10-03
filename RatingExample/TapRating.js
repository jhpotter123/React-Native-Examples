import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Star from './Star'

const TapRating = (props) => {
	const defaultProps = {
		defaultRating: 1,
		reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
		count: 5,
		onFinishRating: () => console.log('Rating selected. Attach a function here.'),
		showRating: true,
		reviewColor: 'rgba(230, 196, 46, 1)',
		reviewSize: 25
	};
	props = { ...defaultProps, ...props };

	const [ position, setPosition ] = useState(5);

	useEffect(() => {
		const { defaultRating } = props
		setPosition(defaultRating);
	}, []);

	const renderStars = (rating_array) => {
		return _.map(rating_array, (star, index) => {
			return star
		})
	};

	const starSelectedInPosition = (position) => {
		const { onFinishRating } = props
		onFinishRating(position);
		setPosition(position);
	}

		const { count, reviews, showRating, reviewColor, reviewSize } = props
		const rating_array = []
		const starContainerStyle = [styles.starContainer]

	if (props.starContainerStyle) {
			starContainerStyle.push(props.starContainerStyle);
	}

	_.times(count, index => {
		rating_array.push(
			<Star
				key={index}
				position={index + 1}
				starSelectedInPosition={starSelectedInPosition}
				fill={position >= index + 1}
				{...props}
			/>
		)
	})

	return (
		<View style={styles.ratingContainer}>
			{ showRating &&
				<Text style={[{fontSize: reviewSize, color: reviewColor}]}>
					{reviews[position - 1]}
				</Text>
			}
			<View style={starContainerStyle}>
				{renderStars(rating_array)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	ratingContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	starContainer: {
		flexDirection: 'row',
	}
});

export default TapRating;
