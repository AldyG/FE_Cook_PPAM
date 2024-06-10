import React from 'react';
import { View, Pressable, Text, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import { Link } from 'expo-router';

interface prop {
  scrollTo: any;
}

const styles = StyleSheet.create({
    buttonPosition: {
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 20,
		display: "flex",
		// gap: 4,
		padding: 8,
		justifyContent: "center",
		position: "absolute",
		width: 200,
		left: Dimensions.get("window").width / 2 - 80
	},
	buttonText: {
		alignItems: "center",
		flex: 1,
		color: "black",
		fontFamily: "DMSans_700Bold",
		fontSize: 16,
		lineHeight: 20,
	},
});

const NextButton: React.FC<prop> = ({ scrollTo }) => {

    return (
		<Pressable style={styles.buttonPosition} onPress={scrollTo}>
			<Text style={styles.buttonText}>
				Next
			</Text>
		</Pressable>
    );
};

export default NextButton;