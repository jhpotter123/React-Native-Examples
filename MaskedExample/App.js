import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, Button, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

// import IntlBankInformation from "./constants/IntlBankInformation";

const COUNTRY_CODE = "US";
// const COUNTRY_CODE = "HR";

const App = () => {
	const [text, setText] = useState("");
	const inputRef = useRef(null);
	const [usePlain, setUsePlain] = useState(false);

	const onChangeText = (maskedText, rawText) => {
		console.log('App onChangeText received:', { maskedText, rawText });
		setText(maskedText);
	};

	useEffect(() => {
		setText("");
	}, []);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View
				style={styles.inputContainer}
				onStartShouldSetResponder={() => {
					console.log('inputContainer onStartShouldSetResponder');
					return false;
				}}
				onResponderGrant={() => console.log('inputContainer onResponderGrant')}
			>
				{usePlain ? (
					<TextInput
						placeholder="Date Of Birth (plain)"
						value={text}
						onChangeText={(v) => {
							console.log('Plain TextInput onChangeText', v);
							setText(v);
						}}
						testID="dob-plain"
						ref={(r) => { inputRef.current = r }}
						onFocus={() => console.log('Plain TextInput onFocus')}
						onBlur={() => console.log('Plain TextInput onBlur')}
						onTouchStart={() => console.log('Plain TextInput onTouchStart')}
						style={styles.input}
						keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
					/>
				) : (
					<TextInputMask
						onTouchStart={() => console.log('TextInputMask onTouchStart')}
					placeholder="Date Of Birth"
					// type={'datetime'}
					// options={{
					//  format: COUNTRY_CODE === "US" ? 'MM-DD-YYYY' : 'DD-MM-YYYY'
					// }}
					type={'custom'}
					options={{
						mask: '99/99/9999'
					}}
					value={text}
					onChangeText={(masked, raw) => {
						console.log('TextInputMask onChangeText (masked, raw):', masked, raw);
						onChangeText(masked, raw);
					}}
					onFocus={() => console.log('TextInputMask onFocus')}
					onBlur={() => console.log('TextInputMask onBlur')}
					testID="dob-input"
					editable={true}
					refInput={(ref) => {
						// ref is the internal TextInput
						inputRef.current = ref;
					}}
					style={styles.input}
						keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
					/>
				)}

				{/* non-blocking visual overlay to detect accidental overlays (pointerEvents='none' so it won't intercept touches) */}
				<View pointerEvents="none" style={styles.debugOverlay} />

				<Button title={usePlain ? 'Use masked input' : 'Use plain input'} onPress={() => setUsePlain(!usePlain)} />
				<Button title="Focus input" onPress={() => {
					try {
						if (inputRef.current && typeof inputRef.current.focus === 'function') {
							inputRef.current.focus();
							console.log('Focused input via ref');
						} else {
							console.log('inputRef current has no focus method', inputRef.current);
						}
					} catch (e) {
						console.warn('Error focusing input', e);
					}
				}} />
			</View>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#f7f7f7'
	},
	inputContainer: {
		margin: 20,
		padding: 10,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: '#fff'
	},
	input: {
		height: 44,
		fontSize: 16,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 6,
		backgroundColor: '#fff',
		color: '#000'
	}
	,
	debugOverlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(255,0,0,0.05)'
	}
});

export default App;
