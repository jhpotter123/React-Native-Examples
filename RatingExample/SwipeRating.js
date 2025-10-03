import times from 'lodash/times';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { 
	View, Text, Animated, PanResponder, Image, 
	StyleSheet, Platform
} from 'react-native';

// RATING IMAGES WITH STATIC BACKGROUND COLOR (white)
const STAR_IMAGE = require('./images/star.png');
const HEART_IMAGE = require('./images/heart.png');
const ROCKET_IMAGE = require('./images/rocket.png');
const BELL_IMAGE = require('./images/bell.png');

const TYPES = {
	star: {
		source: STAR_IMAGE,
		color: '#f1c40f',
		backgroundColor: 'white'
	},
	heart: {
		source: HEART_IMAGE,
		color: '#e74c3c',
		backgroundColor: 'white'
	},
	rocket: {
		source: ROCKET_IMAGE,
		color: '#2ecc71',
		backgroundColor: 'white'
	},
	bell: {
		source: BELL_IMAGE,
		color: '#f39c12',
		backgroundColor: 'white'
	}
};

const SwipeRating = (props) => {
	const defaultProps = {
		type: 'star',
		ratingImage: require('./images/star.png'),
		ratingColor: '#f1c40f',
		ratingBackgroundColor: 'white',
		ratingCount: 5,
		imageSize: 40,
		onFinishRating: () => console.log('Attach a onFinishRating function here.'),
		minValue: 0
	};
	props = { ...defaultProps, ...props };

	const pan = useRef(new Animated.ValueXY());
	const [ display, setDisplay ] = useState(false);
	const { onStartRating, onFinishRating, fractions } = props;

	const panResponder = useMemo(() => PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderGrant: () => {
			if (typeof onStartRating === 'function') {
				onStartRating();
			}
		},
		onPanResponderMove: Animated.event([null, {
			dx	: pan.current.x,
			dy	: pan.current.y
		}], {
			listener: () => {}
		}),
		onPanResponderRelease: (event, gesture) => {
			const rating = getCurrentRating(pan.current.x);
			if (rating >= props.minValue) {
				if (!fractions) {
					// 'round up' to the nearest rating image
					setCurrentRating(rating);
				}
				onFinishRating(rating);
			}
		}
	}), []);

	useEffect(() => {
		try {
			setDisplay(true);
		}
		catch(err) {
			console.log(err)
		}

		pan.current.setValue({ x: 0, y: 0 });
		setCurrentRating(props.startingValue);
	}, [props.startingValue]);

	const getPrimaryViewStyle = () => {
		const { imageSize, ratingCount, type } = props;

		const color = TYPES[type].color;

		const width = pan.current.x.interpolate(
			{
				inputRange: [-ratingCount * (imageSize / 2), 0, ratingCount * (imageSize / 2)],
				outputRange: [0, (ratingCount * imageSize) / 2, ratingCount * imageSize],
				extrapolate: 'clamp'
			},
			{
				useNativeDriver: true
			}
		);

		return {
			backgroundColor: color,
			width,
			height: width ? imageSize : 0
		};
	}

	const getSecondaryViewStyle = () => {
		const { imageSize, ratingCount, type } = props;

		const backgroundColor = TYPES[type].backgroundColor;

		const width = pan.current.x.interpolate(
			{
				inputRange: [-ratingCount * (imageSize / 2), 0, ratingCount * (imageSize / 2)],
				outputRange: [ratingCount * imageSize, (ratingCount * imageSize) / 2, 0],
				extrapolate: 'clamp'
			},
			{
				useNativeDriver: true
			}
		);

		return {
			backgroundColor,
			width,
			height: width ? imageSize : 0
		};
	}

	const renderRatings = () => {
		const { imageSize, ratingCount, type, tintColor } = props;
		const source = TYPES[type].source;

		return times(ratingCount, index => (
			<View key={index} style={styles.starContainer}>
				<Image source={source} style={{ width: imageSize, height: imageSize, tintColor }} />
			</View>
		));
	}

	const getCurrentRating = (value) => {
		const { fractions, imageSize, ratingCount } = props;
		
		const startingValue = ratingCount / 2;
		let currentRating = (props.minValue) ? props.minValue : 0;
		
		let currentValue = Number(JSON.stringify(value));
		if (currentValue > (ratingCount * imageSize) / 2) {
			currentRating = ratingCount;
		} else if (currentValue < (-ratingCount * imageSize) / 2) {
			currentRating = (props.minValue) ? props.minValue : 0;
		} else if (currentValue <= imageSize || currentValue > imageSize) {
			currentRating = startingValue + currentValue / imageSize;
			currentRating = !fractions ? Math.ceil(currentRating) : +currentRating.toFixed(fractions);
		} else {
			currentRating = !fractions ? Math.ceil(startingValue) : +startingValue.toFixed(fractions);
		}

		return currentRating;
	}

	const setCurrentRating = (rating) => {
		const { imageSize, ratingCount } = props;

		// `initialRating` corresponds to `startingValue` in the getter. Naming it
		// differently here avoids confusion with `value` below.
		const initialRating = ratingCount / 2;

		if (rating > ratingCount) {
			pan.current.setValue({x: (ratingCount * imageSize) / 2, y: 0});
		} else if (rating < 0) {
			pan.current.setValue({x: (-ratingCount * imageSize) / 2, y: 0});
		} else if (rating < ratingCount / 2 || rating > ratingCount / 2) {
			pan.current.setValue({x: (rating - initialRating) * imageSize, y: 0});
		} else {
			pan.current.setValue({x: 0, y: 0});
		}
	}

	const displayCurrentRating = () => {
		const { ratingCount, type, readonly, ratingTextColor } = props;
		const color = ratingTextColor || TYPES[type].color;

		return (
			<View style={styles.showRatingView}>
				<View style={styles.ratingView}>
					<Text style={[styles.ratingText, { color }]}>Rating:{' '}</Text>
					<Text style={[styles.currentRatingText, { color }]}>{getCurrentRating(pan.current.x)}</Text>
					<Text style={[styles.maxRatingText, { color }]}>/{ratingCount}</Text>
				</View>
				<View>
					{readonly && <Text style={[styles.readonlyLabel, { color }]}>(readonly)</Text>}
				</View>
			</View>
		);
	}

	const { readonly, type, ratingImage, ratingColor, ratingBackgroundColor, style, showRating } = props;

	if (type === 'custom') {
		let custom = {
			source: ratingImage,
			color: ratingColor,
			backgroundColor: ratingBackgroundColor
		};
		TYPES.custom = custom;
	}

	return (
		display ?
		<View pointerEvents={readonly ? 'none' : 'auto'} style={style}>
			{showRating && displayCurrentRating()}
			<View style={styles.starsWrapper} {...panResponder.panHandlers}>
				<View style={styles.starsInsideWrapper}>
					<Animated.View style={getPrimaryViewStyle()} />
					<Animated.View style={getSecondaryViewStyle()} />
				</View>
				{renderRatings()}
			</View>
		</View> :
		null
	);
}

const styles = StyleSheet.create({
	starsWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	starsInsideWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	showRatingView: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 5
	},
	ratingView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 5
	},
	ratingText: {
		fontSize: 15,
		textAlign: 'center',
		fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
		color: '#34495e'
	},
	readonlyLabel: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 12,
		textAlign: 'center',
		fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
		color: '#34495a'
	},
	currentRatingText: {
		fontSize: 30,
		textAlign: 'center',
		fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null
	},
	maxRatingText: {
		fontSize: 18,
		textAlign: 'center',
		fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
		color: '#34495e'
	}
});

export default SwipeRating;
