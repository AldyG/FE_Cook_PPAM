import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const screenWidth = Dimensions.get("screen").width;

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
		top: 125,
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
		height: 180,
		justifyContent: "center",
		left: 66,
		position: "absolute",
		top: 490,
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
	cookByTheBook: {
		height: 184,
		left: 109,
		objectFit: "cover",
		position: "absolute",
		width: 213,
	},
	buttonPosition: {
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 20,
		display: "flex",
		padding: 8,
		top: 720,
		justifyContent: "center",
		position: "absolute",
		width: 200,
		left: screenWidth / 2 - 80
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

const Welcome3: React.FC<prop> = () => {
	return (
		<View style={styles.welcomePage}>
			<View style={styles.welcomePage1}>
				<Image style={styles.cookByTheBook} source={require("../images/cbtb_nobg.png")} />
				<View style={styles.overlap}>
					<Image style={styles.group2} source={require("../images/three_half_circle.png")} />
					<Image style={styles.screenshot3} source={require("../images/read_book.png")} />
					<Image style={styles.elementsGeometric} source={require("../images/abstract_circle.png")} />
				</View>
				<View style={styles.frame}>
					<View style={styles.ellipse} />
					<View style={styles.ellipse2} />
					<View style={styles.ellipse2} />
				</View>
				<View style={styles.flexContainer}>
					<Text style={styles.text}>
						<Text>
							You can add your{"\n\n"}own recipe to{"\n\n"}share with others!
						</Text>
					</Text>
				</View>
				<Link style={styles.buttonPosition} href={"/login"} replace asChild>
                    <Pressable>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </Pressable>
				</Link>
			</View>
		</View>
	);
}

export default Welcome3;