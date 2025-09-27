import React, { useEffect, Fragment, useContext } from "react";
import { View, StyleSheet } from "react-native";

import Data from "../components/Data";

const Splash = (props) => {
	const data = useContext(Data);

	useEffect(() => {
		props.navigation.navigate("ProfileScreen");
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
