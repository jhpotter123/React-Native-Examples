import React, { useState, Fragment, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = (props) => {
	const [ selection, setSelection ] = useState(false);
	const [ item, setItem ] = useState({});

	useEffect(() => {
		if ( props.item !== undefined ) {
			setItem(props.item);
		}

		if ( props.selection !== undefined ) {
			setSelection(props.selection);
		}
	});

	const onSelectionChange = (value) => {
		// console.log(value);
		setSelection(true);
		if ( props.onSelectionChange !== undefined ) {
			props.onSelectionChange(value);
		}
	};

	return (
		<Fragment>
				<TouchableOpacity style={styles.button} onPress={() => onSelectionChange(item)}>
					{(() => {
						if ( selection ) {
							return (<Text style={{color: "green"}}>{item.value}</Text>);
						}
						else {
							return (<Text style={{color: "black"}}>{item.value}</Text>);
						}
					})()}
				</TouchableOpacity>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 40,
		borderWidth: 1,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ListItem;
