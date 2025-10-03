import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Easing, Dimensions, Image } from "react-native";

class Animate extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 fadeValue: new Animated.Value(0),
			 xValue: new Animated.Value(0),
			 springValue: new Animated.Value(0.3),
		}
	}
	
	fadeAnimation = () => {
		// console.log('pressed button')
		// const toValue = (this.state.fadeValue === 0 ? 1 : 0);
		// console.log('fade to:  ' + this.state.fadeValue);
		Animated.timing(this.state.fadeValue, {
			toValue: 1,
			duration: 2000,
		}).start();
	};

	moveAnimation = () => {
		Animated.timing(this.state.xValue, {
			toValue: Dimensions.get('window').width - 100,
			duration: 1000,
			// easing: Easing.cubic,
			easing: Easing.back(),
		}).start(() => {
			Animated.timing(this.state.xValue, {
				toValue: 0,
				duration: 1000,
				// easing: Easing.linear,
				easing: Easing.back(),
			}).start(() => {
				this.moveAnimation();
			});
		});

	}
	springAnimation = () => {
		Animated.spring(this.state.springValue, {
			toValue: 2,
			friction: 1,
		}).start();
	}

	render() {
		return (
			<Fragment>
				{/* <Animated.View style={[styles.animationView, {opacity: this.state.fadeValue}]}>
				</Animated.View>
				<TouchableOpacity style={styles.button} onPress={this.fadeAnimation}>
					<Text style={styles.buttonText}>Animate</Text>
				</TouchableOpacity> */}
				{/* <Animated.View style={[styles.animationView, {left: this.state.xValue}]}>
				</Animated.View> */}
				<Animated.Image source={require('./react-native.png')}
					style={[styles.imageView, 
						// {left: this.state.xValue}
						{transform: [{ scale: this.state.springValue }], alignSelf: 'center' }
					]}>
				</Animated.Image>
				<TouchableOpacity style={styles.button} onPress={this.springAnimation}>
					<Text style={styles.buttonText}>Move</Text>
				</TouchableOpacity>
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	animationView: {
		width: 100,
		height: 100,
		backgroundColor: 'skyblue',
	},
	button: {
		backgroundColor: 'steelblue',
		marginTop: 20,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		padding: 20,
		// paddingHorizontal: 20,
		fontWeight: 'bold',
		fontSize: 18,
	},
	imageView: {
		width: 100,
		height: 100,
		backgroundColor: 'transparent',
	},
});

export default Animate;
