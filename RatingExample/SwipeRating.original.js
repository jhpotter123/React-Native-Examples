import times from 'lodash/times';
import React, { Component } from 'react';
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

export default class SwipeRating extends Component {
	static defaultProps = {
		type: 'star',
		ratingImage: require('./images/star.png'),
		ratingColor: '#f1c40f',
		ratingBackgroundColor: 'white',
		ratingCount: 5,
		imageSize: 40,
		onFinishRating: () => console.log('Attach a onFinishRating function here.'),
		minValue: 0
	};

	constructor(props) {
		super(props);
		const { onStartRating, onFinishRating, fractions } = this.props;
		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				if (typeof onStartRating === 'function') {
					onStartRating();
				}
			},
			onPanResponderMove: (event, gesture) => {
				const newPosition = new Animated.ValueXY();
				newPosition.setValue({ x: gesture.dx, y: 0 });
				this.setState({ position: newPosition, value: gesture.dx });
			},
			onPanResponderRelease: event => {
				// console.log(this.state.value);
				const rating = this.getCurrentRating(this.state.value);
				// console.log(rating);
				if (rating >= this.props.minValue) {
					if (!fractions) {
						// 'round up' to the nearest rating image
						this.setCurrentRating(rating);
					}
					onFinishRating(rating);
				}
			}
		});

		this.state = { panResponder, position, display: false };
	}

	async componentDidMount() {
		try {
			const STAR_IMAGE = await require('./images/star.png');
			const HEART_IMAGE = await require('./images/heart.png');
			const ROCKET_IMAGE = await require('./images/rocket.png');
			const BELL_IMAGE = await require('./images/bell.png');

			this.setState({ display: true })
		} catch(err) {
			console.log(err)
		}

		this.setCurrentRating(this.props.startingValue);
	}

	componentDidUpdate(prevProps) {
		if (this.props.startingValue !== prevProps.startingValue) {
			this.setCurrentRating(this.props.startingValue);
		}
	}

	getPrimaryViewStyle() {
		const { position } = this.state;
		const { imageSize, ratingCount, type } = this.props;

		const color = TYPES[type].color;

		const width = position.x.interpolate(
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

	getSecondaryViewStyle() {
		const { position } = this.state;
		const { imageSize, ratingCount, type } = this.props;

		const backgroundColor = TYPES[type].backgroundColor;

		const width = position.x.interpolate(
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

	renderRatings() {
		const { imageSize, ratingCount, type, tintColor } = this.props;
		const source = TYPES[type].source;

		// console.log(tintColor, imageSize);
		return times(ratingCount, index => (
			<View key={index} style={styles.starContainer}>
				<Image source={source} style={{ width: imageSize, height: imageSize, tintColor }} />
			</View>
		));
	}

	getCurrentRating(value) {
		// const { value } = this.state;
		const { fractions, imageSize, ratingCount } = this.props;
		// console.log(fractions, imageSize, ratingCount);
		
		const startingValue = ratingCount / 2;
		// console.log(startingValue)
		let currentRating = (this.props.minValue) ? this.props.minValue : 0;
		// console.log(currentRating)
		
		console.log(typeof value)
		// console.log((ratingCount * imageSize) / 2)
		// console.log(value > ((ratingCount * imageSize) / 2));
		if (value > (ratingCount * imageSize) / 2) {
			console.log('A')
			currentRating = ratingCount;
		} else if (value < (-ratingCount * imageSize) / 2) {
			// console.log('B')
			currentRating = (this.props.minValue) ? this.props.minValue : 0;
		} else if (value <= imageSize || value > imageSize) {
			// console.log('C')
			currentRating = startingValue + value / imageSize;
			currentRating = !fractions ? Math.ceil(currentRating) : +currentRating.toFixed(fractions);
		} else {
			// console.log('D')
			currentRating = !fractions ? Math.ceil(startingValue) : +startingValue.toFixed(fractions);
		}

		// console.log(currentRating);
		return currentRating;
	}

	setCurrentRating(rating) {
		const { imageSize, ratingCount } = this.props;

		// `initialRating` corresponds to `startingValue` in the getter. Naming it
		// differently here avoids confusion with `value` below.
		const initialRating = ratingCount / 2;
		let value = null;

		if (rating > ratingCount) {
			value = (ratingCount * imageSize) / 2;
		} else if (rating < 0) {
			value = (-ratingCount * imageSize) / 2;
		} else if (rating < ratingCount / 2 || rating > ratingCount / 2) {
			value = (rating - initialRating) * imageSize;
		} else {
			value = 0;
		}

		const newPosition = new Animated.ValueXY();
		newPosition.setValue({ x: value, y: 0 });
		this.setState({ position: newPosition, value });
	}

	displayCurrentRating() {
		const { ratingCount, type, readonly, ratingTextColor } = this.props;
		const color = ratingTextColor || TYPES[type].color;

		return (
			<View style={styles.showRatingView}>
				<View style={styles.ratingView}>
					<Text style={[styles.ratingText, { color }]}>Rating:{' '}</Text>
					<Text style={[styles.currentRatingText, { color }]}>{this.getCurrentRating(this.state.value)}</Text>
					<Text style={[styles.maxRatingText, { color }]}>/{ratingCount}</Text>
				</View>
				<View>{readonly && <Text style={[styles.readonlyLabel, { color }]}>(readonly)</Text>}</View>
			</View>
		);
	}

	render() {
		const { readonly, type, ratingImage, ratingColor, ratingBackgroundColor, style, showRating } = this.props;

		if (type === 'custom') {
			let custom = {
				source: ratingImage,
				color: ratingColor,
				backgroundColor: ratingBackgroundColor
			};
			TYPES.custom = custom;
		}

		return (
			this.state.display ?
			<View pointerEvents={readonly ? 'none' : 'auto'} style={style}>
				{showRating && this.displayCurrentRating()}
				<View style={styles.starsWrapper} {...this.state.panResponder.panHandlers}>
					<View style={styles.starsInsideWrapper}>
						<Animated.View style={this.getPrimaryViewStyle()} />
						<Animated.View style={this.getSecondaryViewStyle()} />
					</View>
					{this.renderRatings()}
				</View>
			</View> :
			null
		);
	}
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
