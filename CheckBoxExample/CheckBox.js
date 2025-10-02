import React, { useState, useEffect } from 'react';
import { TouchableHighlight, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

var BACKGROUND_COLOR, BORDER_RADIUS, BORDER_WIDTH, COLOR, MARGIN, SIZE, BORDER_COLOR;

const CheckBox = (props) => {
	const [ backgroundColor, setBackgroundColor ] = useState('#FFF');
	const [ borderRadius, setBorderRadius ] = useState(0);
	const [ borderWidth, setBorderWidth ] = useState(2);
	const [ color, setColor ] = useState('#000');
	const [ margin, setMargin ] = useState(2);
	const [ size, setSize ] = useState(20);
	const [ borderColor, setBorderColor ] = useState('#000');
	const [ checked, setChecked ] = useState(props['checked'] !== undefined ? 
		props['checked'] : false);
	
	const toggleCheck = () => {
		let checkedBackup = !checked;
		setChecked(checkedBackup);
		props.onChange && props.onChange(props.name, checkedBackup);
	}

	useEffect(() => {
		if ( props['style'] !== undefined ) {
			setBackgroundColor(props['style']['backgroundColor']);
			setBorderRadius(props['style']['borderRadius']);
			setBorderWidth(props['style']['borderWidth']);
			setMargin(props['style']['margin']);
			setBorderColor(props['style']['borderColor']);
		}

		if ( props['color'] !== undefined ) {
			setColor(props['color']);
		}

		if ( props['size'] !== undefined ) {
			setSize(props['size']);
		}
	});
	
	BACKGROUND_COLOR = backgroundColor;
	BORDER_RADIUS = borderRadius;
	BORDER_WIDTH = borderWidth;
	COLOR = color;
	MARGIN = margin;
	SIZE = size;
	BORDER_COLOR = borderColor;
	return (
		<TouchableHighlight underlayColor='transparent'
			onPress={() => { toggleCheck() }}
			style={{backgroundColor: BACKGROUND_COLOR, borderColor: BORDER_COLOR, 
				borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH, 
				height: SIZE, margin: MARGIN, width: SIZE }}>
			<View style={{flex: 1, alignItems: 'center'}}>
				{ checked &&
				<FontAwesome name='check' size={SIZE - 5 } color={COLOR}/> }
			</View>
		</TouchableHighlight>
	);
};

export default CheckBox;
