import React, { useRef, useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Pet from "./Pet";
// import useIsMountedRef from "../hooks/useIsMountedRef";
import useAbortableEffect from "../hooks/useAbortableEffect";
import Colors from "../constants/Colors";
import { petsReducer } from "../reducers/petsReducer";
import { getPet } from "../fetch/getPet";

// Please note that @react-native-community/picker needs to be installed 
// (npm i will get that for you), but you will need to modify the index.js 
// in react-native-picker-select to import Picker as follows instead of 
// from react-native core library.  It was moved and this will be deprecated 
// soon.
// import { Picker } from '@react-native-community/picker';

const initialState = { loading: false, selectedPet: "", petData: null }

const Pets = () => {
	const [pets, dispatch] = useReducer(petsReducer, initialState);
	// const isMountedRef = useIsMountedRef();

	const onChange = (value) => {
		dispatch({ type: "PET_SELECTED", payload: value });
	};

	useAbortableEffect((status) => {
	// useEffect(() => {
		// console.log(`useEffect:  ${JSON.stringify(pets)}`);
		if (pets.selectedPet) {
			// console.log('is pets.selectedPet');
			dispatch({ type: "FETCH_PET" });
			getPet(pets.selectedPet)
				.then(data => {
					if(!status.aborted) {
					// if ( isMountedRef.current ) {
						dispatch({ type: "FETCH_PET_SUCCESS", payload: data });
					}
				});
		}
		else {
			// console.log('NOT pets.selectedPet');
			dispatch({ type: "RESET" });
		}

		// return () => {
		// 	console.log("clean up logic");
		// }
	}, [pets.selectedPet]);

	useEffect(() => {
		// we can access isMountedRef.current here as well
	});

	return (
		<View style={styles.container}>
			<View style={styles.picker}>
				<RNPickerSelect
					useNativeAndroidPickerStyle={false}
					placeholder={{
						label: "Select a Pet",
						value: null,
					}}
					style={{
						placeholder: {
							// color: "#c7c7cd",
							color: Colors.defaultGray,
						}
					}}
					value={pets.selectedPet}
					onValueChange={onChange}
					items={[
						{ label: "Cats", value: "cats" },
						{ label: "Dogs", value: "dogs" },
					]}
				/>
			</View>
			{pets.loading && <Text>Loading...</Text>}
			{(() => {
				console.log(`render: pets = ${JSON.stringify(pets)}`);
			})()}
			{!pets.loading && pets.petData && typeof pets.petData === 'object' && (
				<>
					<Pet {...pets.petData} />
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	picker: {
		width: 200,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'lightgray',
	},
});

export default Pets;
