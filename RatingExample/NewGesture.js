import React, { Component } from 'react';
import { View, Text, StyleSheet, PanResponder, Dimensions  } from "react-native";

class NewGesture extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			marginRight: 1,
		}

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (e, gesttureState) => true,
			onPanResponderMove: (e, gesttureState) => {
				console.log('check moves', gesttureState.moveX);
				this.setState({marginRight:Dimensions.get('window').width - gesttureState.moveX})
			},
			// onPanResponderRelease: (e, gesttureState) => {
			// }
		});
	}
	
	render() {
		return (
			<View>
				<View style={[styles.child, {marginRight: this.state.marginRight}]}
					{...this.panResponder.panHandlers}
				/>
				<Text style={styles.text}>Testing123</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	child: {
		fontSize: 18,
		textAlign: 'center',
		margin: 10,
		backgroundColor: 'green',
		height: 100,
	},
	text: {
		fontSize: 30,
	}
});

export default NewGesture;
