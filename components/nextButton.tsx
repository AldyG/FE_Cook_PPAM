import React from 'react';
import { View, Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';

interface prop {
  scrollTo: any;
}

const { width } = useWindowDimensions();

const styles = StyleSheet.create({
    buttonPosition: {
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 20,
		display: "flex",
		// gap: 4,
		padding: 8,
		top: 840,
		justifyContent: "center",
		position: "absolute",
		width: 200,
		left: width / 2 - 80
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
        <Link style={styles.buttonPosition} href={"/welcome2"} asChild>
            <Pressable onPress={scrollTo}>
                <Text style={styles.buttonText}>
                    Next
                </Text>
            </Pressable>
        </Link>
    );
};

export default NextButton;