const React = require('react');
const { TextInput, View, Text } = require('react-native');

// Minimal StyleSheet implementation used in many RN files
const StyleSheet = {
	create: styles => styles,
};

const SafeAreaView = (props) => React.createElement(View, props);

const Platform = { OS: 'ios', select: objs => objs.ios };

module.exports = {
	// Basic primitives
	View,
	Text,
	TextInput,
	SafeAreaView,
	StyleSheet,
	Platform,
	// minimal NativeModules to avoid errors
	NativeModules: {},
	// allow requiring other RN internals if necessary
	__esModule: true,
};
