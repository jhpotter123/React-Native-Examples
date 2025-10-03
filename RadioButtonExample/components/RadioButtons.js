import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSelect } from "./IconSelect";

const RadioButtons = (props) => {
	const [ checked, setChecked ] = useState(props.default);
	
	return (
		<View>
			{props.options.map(item => {
				return (
					<View key={item.key} style={styles.buttonContainer}>
						{checked===item.key ? 
						<TouchableOpacity>
							<IconSelect visible={true} style={styles.radioItem} icon={item.icon} fill="green" />
						</TouchableOpacity>
						:
						<TouchableOpacity onPress={()=>setChecked(item.key)}>
							<IconSelect visible={true} style={styles.radioItem} icon={item.icon} fill="black" />
						</TouchableOpacity>
						}
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	radioItem: {
		width: 40,
		height: 40,
	},
});

export default RadioButtons;
