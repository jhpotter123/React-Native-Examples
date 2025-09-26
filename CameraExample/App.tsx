import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RNCamera } from 'react-native-camera';

const App = () => {
	// Camera state
	const [type, setType] = useState(RNCamera.Constants.Type.front); // front or back camera
	const [image, setImage] = useState<string | null>(null); // last captured image
	const cameraRef = useRef<RNCamera | null>(null); // reference to camera instance
	const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off); // flash mode toggle

	// Capture photo and save URI
	async function takePicture() {
		if (cameraRef.current) {
			const options = { quality: 0.5 };
			const data = await cameraRef.current.takePictureAsync(options);
			setImage(data.uri);
		}
	}

	// Switch between front and back cameras
	const toggleType = () => {
		setType(
			type === RNCamera.Constants.Type.front
				? RNCamera.Constants.Type.back
				: RNCamera.Constants.Type.front
		);
	};

	// Toggle flash on/off
	const toggleFlash = () => {
		setFlash(
			flash === RNCamera.Constants.FlashMode.off
				? RNCamera.Constants.FlashMode.on
				: RNCamera.Constants.FlashMode.off
		);
	};

	return (
		<>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerText}>CameraExample</Text>
			</View>

			{/* Camera container */}
			<View style={styles.container}>
				<RNCamera
					ref={cameraRef}
					style={styles.preview}
					type={type}
					flashMode={flash}
				>
					{/* White overlay box for visual focus */}
					<View style={styles.overlay} />

					{/* Flash toggle button (top-right) */}
					<TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
						<Text style={styles.flashText}>
							{flash === RNCamera.Constants.FlashMode.off ? '⚡ Off' : '⚡ On'}
						</Text>
					</TouchableOpacity>
				</RNCamera>

				{/* Capture & Switch buttons */}
				<View style={styles.buttonBar}>
					<TouchableOpacity style={styles.button} onPress={takePicture}>
						<Text style={styles.buttonText}>Capture</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={toggleType}>
						<Text style={styles.buttonText}>Switch Camera</Text>
					</TouchableOpacity>
				</View>

				{/* Render captured image if available */}
				{image !== null ? (
					<Image style={styles.image} source={{ uri: image }} />
				) : (
					<Text>Image will go here</Text>
				)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#000',
		padding: 15,
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},

	button: {
		backgroundColor: '#2196F3',
		padding: 10,
		margin: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	container: {
		backgroundColor: 'black',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	preview: {
		width: 200,
		height: 200,
	},
	buttonBar: {
		flexDirection: 'row'
	},
	image: {
		width: 100, 
		height: 100
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		borderColor: '#fff',
		borderWidth: 2,
		borderRadius: 10,
	},
	flashButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		backgroundColor: 'rgba(0,0,0,0.5)',
		padding: 10,
		borderRadius: 25,
	},
	flashText: {
		color: '#fff',
		fontSize: 16,
	},
});

export default App;
