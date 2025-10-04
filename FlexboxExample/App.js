import React, { Fragment, useState } from "react";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";

const users = [
	{ id: 0, name: "Alexander Johnson", role: "Frontend Developer", avatar: "👨‍💻" },
	{ id: 1, name: "Sarah Williams", role: "UI/UX Designer", avatar: "👩‍🎨" },
	{ id: 2, name: "Michael Chen", role: "Backend Developer", avatar: "👨‍💼" },
	{ id: 3, name: "Emily Rodriguez", role: "Product Manager", avatar: "👩‍💼" },
	{ id: 4, name: "David Thompson", role: "DevOps Engineer", avatar: "👨‍🔧" },
	{ id: 5, name: "Jessica Parker", role: "Data Scientist", avatar: "👩‍🔬" }
];

const App = () => {
	const [selectedUser, setSelectedUser] = useState(null);

	const handleUserSelect = (userId) => {
		setSelectedUser(selectedUser === userId ? null : userId);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Team Dashboard</Text>
					<Text style={styles.headerSubtitle}>Flexbox Layout Demo</Text>
				</View>
				
				<View style={styles.userList}>
					{users.map(user => (
						<TouchableOpacity 
							key={user.id} 
							style={[
								styles.itemContainer,
								selectedUser === user.id && styles.selectedItem
							]}
							onPress={() => handleUserSelect(user.id)}
							activeOpacity={0.7}
						>
							<View style={styles.avatarContainer}>
								<Text style={styles.avatar}>{user.avatar}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.userName}>{user.name}</Text>
								<Text style={styles.userRole}>{user.role}</Text>
							</View>
							<View style={styles.buttonContainer}>
								<TouchableOpacity style={styles.editButton}>
									<Text style={styles.buttonText}>Edit</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					))}
				</View>
				
				<View style={styles.footer}>
					<Text style={styles.footerText}>
						Demonstrating React Native Flexbox Properties
					</Text>
					<View style={styles.flexDemo}>
						<View style={styles.flexItem}>
							<Text style={styles.flexLabel}>flex: 1</Text>
						</View>
						<View style={styles.flexItem}>
							<Text style={styles.flexLabel}>flex: 2</Text>
						</View>
						<View style={styles.flexItem}>
							<Text style={styles.flexLabel}>flex: 1</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#2c3e50',
	},
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
	},
	header: {
		backgroundColor: '#3498db',
		paddingVertical: 20,
		paddingHorizontal: 16,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#ffffff',
		marginBottom: 4,
	},
	headerSubtitle: {
		fontSize: 14,
		color: '#bdc3c7',
		fontStyle: 'italic',
	},
	userList: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		marginBottom: 12,
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		borderLeftWidth: 4,
		borderLeftColor: '#3498db',
	},
	selectedItem: {
		backgroundColor: '#e8f4f8',
		borderLeftColor: '#e74c3c',
		transform: [{ scale: 0.98 }],
	},
	avatarContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#f39c12',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
	},
	avatar: {
		fontSize: 24,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	userName: {
		fontSize: 16,
		fontWeight: '600',
		color: '#2c3e50',
		marginBottom: 4,
	},
	userRole: {
		fontSize: 14,
		color: '#7f8c8d',
		fontStyle: 'italic',
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	editButton: {
		backgroundColor: '#27ae60',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
		minWidth: 60,
		alignItems: 'center',
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 14,
		fontWeight: '500',
	},
	footer: {
		backgroundColor: '#34495e',
		paddingVertical: 20,
		paddingHorizontal: 16,
		alignItems: 'center',
	},
	footerText: {
		color: '#ecf0f1',
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 16,
		textAlign: 'center',
	},
	flexDemo: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		borderRadius: 8,
		overflow: 'hidden',
	},
	flexItem: {
		backgroundColor: '#9b59b6',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 2,
		borderRadius: 4,
	},
	flexLabel: {
		color: '#ffffff',
		fontSize: 12,
		fontWeight: 'bold',
	},
});

export default App;
