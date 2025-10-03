import React, {useState, useEffect, Fragment} from "react";
import { View, Text, StyleSheet } from "react-native";
import AccordionItem from "./AccordionItem";

const AccordionList = (props) => {
	const renderHeader = (data) => {
		return (
			<View style={styles.header}>
				<View>
					<Text style={styles.headerTextColor}>{data.col1}</Text>
				</View>
				<View>
					<Text style={styles.headerTextColor}>{data.col2}</Text>
				</View>
				<View>
					<Text style={styles.headerTextColor}>{data.col3}</Text>
				</View>
			</View>
		);
	};

	const renderContents = (data) => {
		return (
			<View style={styles.contents}>
				<View>
					<Text style={styles.contentsTextColor}>{data.col1Contents}</Text>
				</View>
				<View>
					<Text style={styles.contentsTextColor}>{data.col2Contents}</Text>
				</View>
				<View>
					<Text style={styles.contentsTextColor}>{data.col3Contents}</Text>
				</View>
			</View>
		);
	};

	const [selection, setSelection] = useState(null);
	const onSelectionChange = (index, value) => {
		if ( props.onSelectionChange !== undefined ) {
			props.onSelectionChange(index);
		}
		
		if ( value === true ) {
			setSelection(index);
		}
		else {
			setSelection(null);
		}
	};

	return (
		<View style={styles.container}>
			{
				props.data.map(
					(entry, index) => {
						let currSelection = (selection !== null && index === selection) ? true : false
						return (
							<AccordionItem 
								key={index}
								index={index}
								data={entry}
								renderHeader={renderHeader}
								renderContents={renderContents}
								selection={currSelection} 
								onSelectionChange={(value) => {
									onSelectionChange(index, value);
								}}
							/>
						);
					}
				)
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingVertical: 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "80%",
		padding: 10,
		backgroundColor: "black",
	},
	contents: {
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-evenly",
	},
	headerTextColor: {
		color: "white",
	},
	contentsTextColor: {
		color: "black",
	},
});

export default AccordionList;
