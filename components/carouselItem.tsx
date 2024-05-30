import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, useWindowDimensions, ImageSourcePropType } from "react-native";
import { Link } from "expo-router";
import Carousel from './carousel';

interface prop {
    item: {
        id: string;
        text1: string;
        text2: string;
        text3: string;
        imGroup: ImageSourcePropType;
        imScreenshot: ImageSourcePropType;
        imElements: ImageSourcePropType;
        imBg: ImageSourcePropType;
    };
}

const { width } = useWindowDimensions();

const styles = StyleSheet.create({
	welcomePage: {
		backgroundColor: "#87e4fd",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},
	welcomePage1: {
		backgroundColor: "var(--primary)",
		height: 932,
		position: "relative",
		width: 430,
	},
	overlap: {
		height: 331,
		left: 0,
		position: "absolute",
		top: 225,
		width: 430,
	},
	group: {
		height: 239,
		left: 0,
		position: "absolute",
		top: 92,
		width: 430,
	},
	group2: {
		height: 280,
		left: 0,
		position: "absolute",
		top: "15%",
		width: 430,
	},
	screenshot: {
		height: 331,
		left: 44,
		objectFit: "cover",
		position: "absolute",
		top: 0,
		width: 344,
	},
	screenshot2: {
		height: 250,
		left: "13%",
		position: "absolute",
		top: "25%",
		width: 287,
	},
	screenshot3: {
		height: 299,
		left: "25%",
		position: "absolute",
		top: "13%",
		width: 188,
	},
	elementsGeometric: {
		height: 315,
		left: 0,
		position: "absolute",
		top: 0,
		width: 323,
	},
	frame: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "row",
		gap: 6,
		left: 66,
		position: "absolute",
		top: 643,
	},
	ellipse: {
		backgroundColor: "var(--white)",
		borderRadius: 3,
		height: 6,
		position: "relative",
		width: 6,
	},
	ellipse2: {
		backgroundColor: "var(--ingredients)",
		borderRadius: 3,
		height: 6,
		position: "relative",
		width: 6,
	},
	flexContainer: {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: 134,
		justifyContent: "center",
		left: 66,
		position: "absolute",
		top: 640,
		width: 329,
	},
	text: {
		alignSelf: "stretch",
		color: "var(--font)",
		fontFamily: "DMSans_700Bold",
		fontSize: 36,
		lineHeight: 36,
		position: "relative",
	},
	textWrapper2: {
		color: "#080738",
		fontFamily: "DMSans_400Regular",
		fontSize: 36,
		lineHeight: 36,
	},
	cookByTheBook: {
		height: 184,
		left: 109,
		objectFit: "cover",
		position: "absolute",
		top: 52,
		width: 213,
	},
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

const CarouselItem: React.FC<prop> = ({ item }) => {
		return (
			<ScrollView contentContainerStyle={styles.welcomePage}>
				<View style={styles.welcomePage1}>
					<View style={styles.overlap}>
						<Image style={styles.group} source={item.imGroup} />
						<Image style={styles.screenshot} source={item.imScreenshot} />
						<Image style={styles.elementsGeometric} source={item.imElements} />
					</View>
					<View style={styles.frame}>
						<View style={styles.ellipse} />
						<View style={styles.ellipse2} />
						<View style={styles.ellipse2} />
					</View>
					<View style={styles.flexContainer}>
						<Text style={styles.text}>
							<Text>
								{item.text1}
							</Text>
						</Text>
						<Text style={styles.text}>
							<Text style={styles.textWrapper2}>
                                {item.text2}
							</Text>
						</Text>
						<Text style={styles.text}>
							<Text style={styles.textWrapper2}>
                                {item.text3}
							</Text>
						</Text>
					</View>
					<Image style={styles.cookByTheBook} source={item.imBg} />
				</View>
			</ScrollView>
		);
	}

export default CarouselItem;