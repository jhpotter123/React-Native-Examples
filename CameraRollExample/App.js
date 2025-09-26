import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CameraRollSelector from "react-native-camera-roll-selector";

const App = () => {
	const [currSelection, setCurrSelection ] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.text}>
					<Text style={styles.bold}></Text> images has been selected
				</Text>
			</View>
			{(() => {
				if ( currSelection === null ) {
					const callback = (selectedImages, currentSelectedImage) => {
						// console.log(currentSelectedImage.node.image.uri)
						// console.log(currentSelectedImage.node.image.width)
						// console.log(currentSelectedImage.node.image.height)
						// console.log(currentSelectedImage.node.image);

						let value = {
							uri: currentSelectedImage.node.image.uri,
							stylesObj: {
								width: currentSelectedImage.node.image.width * .3,
								height: currentSelectedImage.node.image.height * .3,
							}
						};
						// console.log(value.uri);
						// console.log(value.stylesObj);
						setCurrSelection(value);
					};

					return (
						<CameraRollSelector
							callback={callback}
				
							// OPTIONAL PROP USAGE.
							maximum={1} // Max number of selected images. 10 default.
							enableSelect={true} // default true
							imagesPerRow={3} // default 3
							spacing={1} // default 1
						/>
					)
				}
			})()}

			{( currSelection !== null && 
				<TouchableOpacity style={styles.button} onPress={() => setCurrSelection(null)}>
					<Text style={styles.buttonText}>Select Another</Text>
				</TouchableOpacity>
			)}
			<View style={styles.imageContainer}>
				{(() => {
					// console.log(currSelection.uri);
					// console.log(currSelection.stylesObj);
				})()}
				{( currSelection !== null && 
					<Image 
						style={currSelection.stylesObj}
						source={{uri: currSelection.uri}}
					/>
				)}
			</View>

		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#F6AE2D',
		// backgroundColor: 'black',
	},
	content: {
		marginTop: 15,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		// backgroundColor: 'black'
	},
	text: {
		fontSize: 16,
		alignItems: 'center',
		color: '#fff',
		// backgroundColor: 'black'
	},
	bold: {
		fontWeight: 'bold',
		// backgroundColor: 'black'
	},
	info: {
		fontSize: 12,
		// backgroundColor: 'black'
	},
	button: {
		backgroundColor: 'black',
		width: 200,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	buttonText: {
		color: 'white',
		
	},
	imageContainer: {
		paddingTop: 20,
	},
	// use this instead
	// currSelection.stylesObj
	// image: {
	// 	// width: 400,
	// 	height: 400
	// }
});

export default App;
