import React, { Fragment, useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";

const AccordionItem = (props) => {
	const [ selection, setSelection ] = useState(false);
	const [ data, setData ] = useState({});

	useEffect(() => {
		setSelection(props.selection);
		
		if ( props.data !== undefined  ) {
			setData(props.data);
		}
	});

	const onSelectionChange = (value) => {
		let newSelection = !selection ? true : false;
		if ( props.onSelectionChange !== undefined ) {
			props.onSelectionChange(newSelection);
		}
		setSelection(newSelection);
	};

	const renderHeader = (data) => {
		return (
			<View>
				{props.renderHeader && props.renderHeader(data)}
			</View>
		);
	};

	const renderContents = (data) => {
		return (
			<View>
				{props.renderContents && props.renderContents(data)}
			</View>
		);
	};

	return (
		<Fragment>
			<TouchableOpacity onPress={() => {
				onSelectionChange(selection);
			}}>
				{renderHeader(data)}
			</TouchableOpacity>
			{selection && renderContents(data)}
		</Fragment>
	);
};

export default AccordionItem;
