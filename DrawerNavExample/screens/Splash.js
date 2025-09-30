import React, { useEffect, Fragment, useContext } from "react";
import { View, StyleSheet } from "react-native";

import Data from "../components/Data";

const Splash = (props) => {
	const data = useContext(Data);

	useEffect(() => {
		// navigate to the named route registered in the drawer ('Profile')
		setTimeout(() => {
			// 'Profile' is defined inside the nested 'Main' navigator (DrawerScreens),
			// so navigate to the parent route 'Main' and specify the child screen.
			props.navigation.navigate('Main', { screen: 'Profile' });
		}, 50);
		data.SOMETHINGELSE = "STUFF GOES HERE";
	}, []);

	return (
		<Fragment>
			<View style={styles.container} />
		</Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

export default Splash;
