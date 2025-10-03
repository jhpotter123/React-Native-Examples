import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import CheckBox from './CheckBox';

const initialItems = [
	{ id: 'apple', label: 'Enable Apples', checked: true, color: '#ff6b6b' },
	{ id: 'banana', label: 'Bananas (beta)', checked: false, color: '#ffd93d' },
	{ id: 'cherry', label: 'Cherries', checked: false, color: '#c0392b' },
	{ id: 'date', label: 'Dried Dates', checked: true, color: '#8e44ad' },
];

const App = () => {
	const [items, setItems] = useState(initialItems);

	const onChange = (name, next) => {
		setItems((prev) => prev.map((it) => (it.id === name ? { ...it, checked: next } : it)));
	};

	const toggleAll = () => {
		const allTrue = items.every((i) => i.checked);
		setItems((prev) => prev.map((i) => ({ ...i, checked: !allTrue })));
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Stylish Checkboxes Demo</Text>

			<View style={styles.card}>
				{items.map((it) => (
					<View key={it.id} style={styles.row}>
						<CheckBox
							name={it.id}
							checked={it.checked}
							onChange={onChange}
							size={28}
							color={it.color}
							style={{ borderRadius: 6, borderWidth: 2, borderColor: '#eee', backgroundColor: '#fff' }}
						/>
						<View style={styles.labelWrap}>
							<Text style={styles.label}>{it.label}</Text>
							<Text style={styles.subLabel}>id: {it.id}</Text>
						</View>
					</View>
				))}

				<View style={styles.controls}>
					<TouchableOpacity style={styles.button} onPress={toggleAll}>
						<Text style={styles.buttonText}>Toggle All</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.preview}>
				<Text style={styles.previewTitle}>State Preview</Text>
				<Text style={styles.previewText}>{JSON.stringify(items, null, 2)}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 24,
		alignItems: 'stretch',
		backgroundColor: '#f6f7fb',
		minHeight: '100%',
	},
	title: {
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 18,
		color: '#222',
		textAlign: 'center',
	},
	card: {
		backgroundColor: '#fff',
		padding: 12,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOpacity: 0.06,
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 12,
		elevation: 3,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f0f0f0',
	},
	labelWrap: {
		marginLeft: 12,
	},
	label: {
		fontSize: 16,
		color: '#222',
		fontWeight: '600',
	},
	subLabel: {
		fontSize: 12,
		color: '#777',
		marginTop: 2,
	},
	controls: {
		marginTop: 12,
		alignItems: 'flex-end',
	},
	button: {
		backgroundColor: '#3b82f6',
		paddingHorizontal: 14,
		paddingVertical: 8,
		borderRadius: 8,
	},
	buttonText: {
		color: '#fff',
		fontWeight: '700',
	},
	preview: {
		marginTop: 18,
		backgroundColor: '#fff',
		padding: 12,
		borderRadius: 10,
	},
	previewTitle: {
		fontWeight: '700',
		marginBottom: 8,
	},
	previewText: {
		fontFamily: 'monospace',
		color: '#333',
	},
});

export default App;
