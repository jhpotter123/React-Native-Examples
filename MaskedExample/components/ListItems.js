import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const ListItems = (props) => {
	const [ selection, setSelection ] = useState(props.default);
	
	const onSelectionChange = (value) => {
		console.log(value);
		setSelection(value);

		if ( props.onSelectionChange !== undefined ) {
			props.onSelectionChange(value);
		}
	};

	return (
		<View>
			{props.options.map((item, index) => {
				return (
					<View key={item.key}>
						{(() => {
							if ( selection.key === item.key ) {
								return (<ListItem selection={true} item={item} onSelectionChange={onSelectionChange} />);
							}
							else {
								return (<ListItem selection={false} item={item} onSelectionChange={onSelectionChange} />);
							}
						})()}
					</View>
				);
			})}
		</View>
	);
}

export default ListItems;
