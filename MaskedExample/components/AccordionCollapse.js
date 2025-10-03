import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from "accordion-collapse-react-native";

const AccordionCollapse = () => {
	const [list, setList] = useState([
		{
			key: "0",
			title: "My Titlea",
			title2: "My Title1b",
			title3: "My Title1c",
			body: "My Body",
			enabled: true,
			show: false,
		},
		{
			key: "1",
			title: "My Title2a",
			title2: "My Title2b",
			title3: "My Title2c",
			body: "My Body2",
			enabled: true,
			show: false,
		},
		{
			key: "2",
			title: "My Title3a",
			title2: "My Title3b",
			title3: "My Title3c",
			body: "My Body3",
			enabled: true,
			show: false,
		},
	]);
	// const [selection, setSelection] = useState("0");
	const [selection, setSelection] = useState(0);
	const [loadedList, setLoadedList] = useState(true);

	const enableItem = (entry) => {
		// console.log(entry);
		let tmpList = list;
		tmpList[Number(entry.key)].enabled = !tmpList[Number(entry.key)].enabled;
		setList(tmpList);
		// console.log(tmpList[Number(entry.key)]);
		setLoadedList(false);
		setTimeout(() => {
			setLoadedList(true);
		});

	};

	const head = (entry) => {
		return (
			<View style={styles.header}>
				<View>
					<Text>{entry.title}</Text>
				</View>
				<View>
					<Text>{entry.title2}</Text>
				</View>
				<View>
					<Text>{entry.title3}</Text>
				</View>
			</View>
		);
	};

	const body = (entry) => {
		return (
			<View style={styles.body}>
				<Text>{entry.body}</Text>
				<TouchableOpacity style={styles.button} onPress={() => {
						enableItem(entry);
					}}>
					<Text style={styles.buttonText}>
						{entry.enabled ? "Disable" : "Enable"}
					</Text>
				</TouchableOpacity>
			</View>
		);
	};

	const onToggle = (index, value, entry) => {
		// console.log(`typeof index:  ${typeof index}, typeof value:  ${typeof value}, typeof entry:  ${typeof entry}`);
		// console.log(`index = ${index}, value = ${value}, entry = ${JSON.stringify(entry)}`);

		let tmpArr = list;
		tmpArr.forEach((tmpEntry, tmpIndex) => {
			tmpEntry.show = false;
		});
		if (value === true) {
			tmpArr[index].show = true;
		}
		setList(tmpArr);
		setSelection(value);

		// Lastly refresh the list by triggering a re-render.  Note you want this to be as fast as possible.
		setLoadedList(false);
		setTimeout(() => {
			setLoadedList(true);
		});
	};

	const onToggleAccordion = (key, value) => {
		// console.log(`typeof key:  ${typeof key}, typeof value:  ${typeof value}`);
		// console.log(`key = ${key}, value = ${value}`);
	};

	// console.log(selection.toString());
	// console.log(typeof selection.toString());
	return (
		<View style={styles.container}>
			{/* 
				Note these two examples present the same data list but in 
				a different way.  The first example is how you would do it 
				if the user can have multiple entries open at the same time.
			*/}

			<Text>Simple Collapsibles Example</Text>
			{loadedList &&
				list.map((entry, index) => (
					<Collapse key={index} isCollapsed={list[index].show} onToggle={(value) => {
						// console.log(typeof value);
						// console.log(value);
						onToggle(index, value, entry);
					}}>
						<CollapseHeader>
							{head(entry)}
						</CollapseHeader>
						<CollapseBody>
							{body(entry)}
						</CollapseBody>
					</Collapse>
				))
			}

			{/* <Text>AccordionList Example</Text>
			{
				loadedList && 
				<AccordionList
					list={list}
					header={head}
					body={body}
					onToggle={onToggleAccordion}
				/>
			} */}

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	header: {
		flexDirection: "row",
		height: 50,
		borderWidth: 1,
		backgroundColor: "lightgray",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	body: {
		// flexDirection: "row",
		// height: 50,
		borderWidth: 1,
		alignItems: "center",
	},
	button: {
		width: 100,
		height: 40,
		backgroundColor: 'black',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	buttonText: {
		color: 'white',
	},
});

export default AccordionCollapse;
