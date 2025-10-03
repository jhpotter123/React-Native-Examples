import React, { useState, useEffect, Fragment } from "react";
import { AppState } from "react-native";

const App = () => {
	const [appState, setAppState] = useState(AppState.currentState);

	// handler must be stable for add/remove
	const handleAppStateChange = (nextAppState) => {
		setAppState(nextAppState);
	};

	useEffect(() => {
		// Newer RN versions return a subscription with a `remove()` method.
		const subscription = AppState.addEventListener("change", handleAppStateChange);

		return () => {
			if (subscription && typeof subscription.remove === 'function') {
				subscription.remove();
			} else {
				// Fallback for older RN versions that still expect removeEventListener
				AppState.removeEventListener("change", handleAppStateChange);
			}
		};
	}, []);

	// Log appState changes (keeps previous behavior but avoids logging during render)
	useEffect(() => {
		console.log(appState);
	}, [appState]);

	return <Fragment />;
};

export default App;
