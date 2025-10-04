import React, { useReducer, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	RESET: "reset",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		case ACTIONS.RESET:
			return { count: 0 };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const scaleValue = new Animated.Value(1);

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	useEffect(() => {
		// Animate the counter when it changes
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 1.2,
				duration: 150,
				useNativeDriver: true,
			}),
			Animated.timing(scaleValue, {
				toValue: 1,
				duration: 150,
				useNativeDriver: true,
			}),
		]).start();
	}, [state.count]);

	const handleIncrement = () => {
		dispatch({ type: ACTIONS.INCREMENT });
	};

	const handleDecrement = () => {
		dispatch({ type: ACTIONS.DECREMENT });
	};

	const handleReset = () => {
		dispatch({ type: ACTIONS.RESET });
	};

	const getCounterColor = () => {
		if (state.count > 0) return '#4CAF50';
		if (state.count < 0) return '#F44336';
		return '#2196F3';
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
			
			<View style={styles.header}>
				<Text style={styles.title}>useReducer Counter</Text>
				<Text style={styles.subtitle}>React Native Hook Demonstration</Text>
			</View>

			<View style={styles.counterContainer}>
				<Animated.View 
					style={[
						styles.counterCircle, 
						{ 
							transform: [{ scale: scaleValue }],
							backgroundColor: getCounterColor()
						}
					]}
				>
					<Text style={styles.counterText}>{state.count}</Text>
				</Animated.View>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity 
					style={[styles.button, styles.decrementButton]} 
					onPress={handleDecrement}
					activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>−</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={[styles.button, styles.resetButton]} 
					onPress={handleReset}
					activeOpacity={0.8}
				>
					<Text style={styles.resetButtonText}>RESET</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={[styles.button, styles.incrementButton]} 
					onPress={handleIncrement}
					activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Current Value: <Text style={{ color: getCounterColor(), fontWeight: 'bold' }}>{state.count}</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f0f23',
		paddingHorizontal: 20,
		paddingTop: 60,
	},
	header: {
		alignItems: 'center',
		marginBottom: 50,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#ffffff',
		marginBottom: 8,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 16,
		color: '#a0a0a0',
		textAlign: 'center',
	},
	counterContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	counterCircle: {
		width: 200,
		height: 200,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,
		elevation: 16,
	},
	counterText: {
		fontSize: 64,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 50,
		paddingHorizontal: 20,
	},
	button: {
		width: 70,
		height: 70,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	incrementButton: {
		backgroundColor: '#4CAF50',
	},
	decrementButton: {
		backgroundColor: '#F44336',
	},
	resetButton: {
		backgroundColor: '#FF9800',
		width: 100,
		borderRadius: 25,
	},
	buttonText: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	resetButtonText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#ffffff',
		letterSpacing: 1,
	},
	footer: {
		alignItems: 'center',
		marginBottom: 40,
	},
	footerText: {
		fontSize: 18,
		color: '#a0a0a0',
		textAlign: 'center',
	},
});

export default App;
