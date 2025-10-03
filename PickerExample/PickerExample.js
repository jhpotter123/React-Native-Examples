import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
// import { View, Text, Picker } from "react-native";
import { Picker } from "@react-native-community/picker";

const PickerExample = (props) => {
	const [ user, setUser ] = useState("");

	const updateUser = (user) => {
		setUser(user);
	};

	return (
		<View>
			<Text>Top line</Text>
			<View>
				<Picker selectedValue={user} onValueChange={updateUser}>
					<Picker.Item label="Steve" value="steve" />
					<Picker.Item label="Ellen" value="ellen" />
					<Picker.Item label="Maria" value="maria" />
				</Picker>
				{/* <Picker selectedValue={user} onValueChange={updateUser}>
					<Picker.Item label="Steve" value="steve" />
					<Picker.Item label="Ellen" value="ellen" />
					<Picker.Item label="Maria" value="maria" />
				</Picker> */}
			</View>
			<Text>Bottom line</Text>
		</View>
	);
};

export default PickerExample;
