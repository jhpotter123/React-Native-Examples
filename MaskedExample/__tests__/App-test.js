/**
 * @format
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('renders Date Of Birth input and allows typing', () => {
	const { getByPlaceholderText } = render(<App />);

	const input = getByPlaceholderText('Date Of Birth');
	expect(input).toBeTruthy();

	// simulate user entering a date
	fireEvent.changeText(input, '12/31/1999');
	expect(input.props.value).toBe('12/31/1999');
});
