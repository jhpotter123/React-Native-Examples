import React from "react";
import { View, Text } from "react-native";

const Pet = (props) => {
	// console.log(JSON.stringify(props));
	return (
		<View>
			<Text>{props.name}</Text>
			<Text>{props.voice}</Text>
			<Text>{props.avatar}</Text>
		</View>
	)
}

export default Pet;
