import React, { useState, useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, View, Animated, Text } from 'react-native';

// Dynamically require FontAwesome so Jest won't attempt to parse node_modules' ES imports
let FontAwesome = null;
try {
	// prefer .default if the package exports as ES module
	const mod = require('react-native-vector-icons/FontAwesome');
	FontAwesome = mod && (mod.default || mod);
} catch (e) {
	// testing environments (Jest) may not be able to import this package; fall back to null
	FontAwesome = null;
}

const CheckBox = (props) => {
	const {
		name,
		onChange,
		style = {},
		color = '#000',
		size = 24,
		checked: checkedProp,
	} = props;

	const [checked, setChecked] = useState(checkedProp ?? false);
	const scale = useRef(new Animated.Value(1)).current;

	// Keep internal checked in sync if parent controls it
	useEffect(() => {
		if (checkedProp !== undefined) setChecked(checkedProp);
	}, [checkedProp]);

	const toggle = () => {
		const next = !checked;
		setChecked(next);
		onChange && onChange(name, next);

		// small scale pop animation
		Animated.sequence([
			Animated.timing(scale, { toValue: 1.08, duration: 110, useNativeDriver: true }),
			Animated.spring(scale, { toValue: 1, friction: 6, useNativeDriver: true }),
		]).start();
	};

	const boxStyle = {
		width: size,
		height: size,
		borderRadius: style.borderRadius ?? 6,
		borderWidth: style.borderWidth ?? 2,
		backgroundColor: style.backgroundColor ?? '#fff',
		borderColor: style.borderColor ?? '#ddd',
		margin: style.margin ?? 6,
		alignItems: 'center',
		justifyContent: 'center',
	};

		return (
			<TouchableWithoutFeedback
				onPress={toggle}
				accessibilityRole="checkbox"
				accessibilityState={{ checked }}
			>
				<Animated.View style={[boxStyle, { transform: [{ scale }] }]}> 
					{checked && (
						FontAwesome ? (
							<FontAwesome name="check" size={Math.max(10, size - 6)} color={color} />
						) : (
							<Text style={{ color, fontSize: Math.max(10, size - 6), fontWeight: '700' }}>✓</Text>
						)
					)}
				</Animated.View>
			</TouchableWithoutFeedback>
		);
};

export default CheckBox;
