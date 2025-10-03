import React from 'react';
import { TextInput } from 'react-native';

// A simple editable mock for TextInputMask so tests can interact with it.
export const TextInputMask = ({ value, onChangeText, ...props }) => {
	const [internal, setInternal] = React.useState(value ?? '');

	React.useEffect(() => {
		setInternal(value ?? '');
	}, [value]);

	return (
		<TextInput
			testID="mocked-mask"
			value={internal}
			onChangeText={(v) => {
				setInternal(v);
				if (typeof onChangeText === 'function') {
					onChangeText(v);
				}
			}}
			{...props}
		/>
	);
};
