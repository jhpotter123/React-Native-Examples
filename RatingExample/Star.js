import React, { useState } from 'react';
import {StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {LogoIcon} from './LogoIcon';

const STAR_IMAGE = require('./gear-unselected.png')
const STAR_SELECTED_IMAGE = require('./gear-selected.png')
const STAR_SIZE = 40;

const Star = (props) => {
	const defaultProps = {
		selectedColor: 'black'
	};
	props = { ...defaultProps, ...props };

	const [ selected, setSelected ] = useState(false);

	const spring = () => {
		const { position, starSelectedInPosition } = props;
		setSelected(!selected);
		starSelectedInPosition( position );
	};

	const { fill, size, selectedColor, isDisabled, starStyle } = props;
	const starSource = fill && selectedColor === null ? STAR_SELECTED_IMAGE : STAR_IMAGE;
	const fillColor = (fill && selectedColor ? selectedColor : 'gray');

	return (
		<TouchableWithoutFeedback activeOpacity={1} onPress={spring} disabled={isDisabled}>
			{/* <Image
				source={starSource}
				style={[
					styles.starStyle,
					{
						tintColor: fillColor,
						width: size || STAR_SIZE,
						height: size || STAR_SIZE,
					},
					starStyle
				]}
			/> */}
			<LogoIcon visible={true} icon="icon-gear" fill={fillColor} style={styles.starStyle} />
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create( {
	starStyle: {
		margin: 3,
		width: 50,
		height: 50,
	}
} );

export default Star;
