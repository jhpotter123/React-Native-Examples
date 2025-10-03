import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, PermissionsAndroid, Platform, ScrollView, ActivityIndicator } from "react-native";
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

const App = (props) => {
	const [ ready, setReady ] = useState(false);
	const [ where, setWhere ] = useState({lat: null, lng: null});
	const [ position, setPosition ] = useState(null);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		if (Platform.OS === 'android') {
			requestLocationPermission()
		} else {
			// On iOS explicitly request authorization first so the permission prompt appears
			try {
				// requestAuthorization expects an authorization level on some versions
				Geolocation.requestAuthorization && Geolocation.requestAuthorization('whenInUse');
			} catch (e) {
				console.warn('requestAuthorization failed', e);
			}
			_getCurrentLocation()
		}
	}, []);

	const requestLocationPermission = async() => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					'title': 'Location Permission',
					'message': 'MyMapApp needs access to your location'
				}
			);
	
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				_getCurrentLocation()
				console.log("Location permission granted")
			} else {
				console.log("Location permission denied")
			}
		} catch (err) {
			console.warn(err)
		}
	}
	
	const _getCurrentLocation = () =>{
		let geoOptions = {
			enableHighAccuracy: true,
			timeout: 20000,
			// maximumAge: 60 * 60 * 24
			maximumAge: 10000
		};

		setReady(false);
		setError(null);

		// Geolocation.setRNConfiguration(geoOptions);
		// Geolocation.watchPosition(
		Geolocation.getCurrentPosition(
			geoSuccess, 
			geoFailure,
			geoOptions
		);
	};

	const geoSuccess = (position) => {
		console.log(position);
		setPosition(position);
		setReady(true);
		setWhere({lat: position.coords.latitude, lng: position.coords.longitude});
	}

	const geoFailure = (err) => {
		console.log(err);
		// keep the raw object in state but the UI will render a friendly message
		setError(err);
	}

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				{ !ready && !error && (
					<View style={styles.centered}>
						<ActivityIndicator size="large" color="#007AFF" />
						<Text style={styles.small}>Fetching current location…</Text>
					</View>
				)}
				{ error && (
					<View style={styles.card}>
						<Text style={styles.errorText}>{typeof error === 'string' ? error : (error.message || JSON.stringify(error))}</Text>
					</View>
				)}
				{ ready && (
					<View style={styles.card}>
						<Text style={styles.title}>Current Location</Text>
						<Text style={styles.big}>{`Latitude: ${where.lat}`}</Text>
						<Text style={styles.big}>{`Longitude: ${where.lng}`}</Text>
						{position && (
							<View style={styles.details}>
								<Text style={styles.label}>Accuracy: <Text style={styles.value}>{position.coords.accuracy}</Text></Text>
								<Text style={styles.label}>Altitude: <Text style={styles.value}>{position.coords.altitude}</Text></Text>
								<Text style={styles.label}>Altitude Accuracy: <Text style={styles.value}>{position.coords.altitudeAccuracy}</Text></Text>
								<Text style={styles.label}>Latitude: <Text style={styles.value}>{position.coords.latitude}</Text></Text>
								<Text style={styles.label}>Longitude: <Text style={styles.value}>{position.coords.longitude}</Text></Text>
								<Text style={styles.label}>Heading: <Text style={styles.value}>{position.coords.heading}</Text></Text>
								<Text style={styles.label}>Speed: <Text style={styles.value}>{position.coords.speed}</Text></Text>
								<Text style={styles.label}>Provider: <Text style={styles.value}>{position.provider || 'n/a'}</Text></Text>
								<Text style={styles.label}>Mocked: <Text style={styles.value}>{String(position.mocked)}</Text></Text>
								<Text style={styles.label}>Timestamp: <Text style={styles.value}>{new Date(position.timestamp).toString()}</Text></Text>
							</View>
						)}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: '#f2f4f8'
	},
	container: {
		flexGrow: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		width: '100%',
		backgroundColor: '#ffffff',
		borderRadius: 10,
		padding: 16,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 8
	},
	big: {
		fontSize: 20,
		marginBottom: 6
	},
	small: {
		marginTop: 10,
		fontSize: 14,
		color: '#666'
	},
	label: {
		fontSize: 14,
		color: '#333',
		marginTop: 6
	},
	value: {
		fontWeight: '600',
		color: '#111'
	},
	errorText: {
		color: '#b00020',
		fontSize: 16
	},
	centered: {
		alignItems: 'center'
	},
	details: {
		marginTop: 12
	}
});


export default App;
