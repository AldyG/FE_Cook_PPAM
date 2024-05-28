import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
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
		backgroundColor: "#87e4fd",
		height: 932,
		position: "relative",
		width: 430,
	},
	cookByTheBook: {
		height: 184,
		left: 109,
		objectFit: "cover",
		position: "absolute",
		top: 52,
		width: 213,
	},
	rectangle_bg: {
		backgroundColor: "#EEFAFF",
		borderRadius: 65,
		height: 625,
		left: 40,
		position: "absolute",
		top: 222,
		width: 350,
		borderColor: "black",
		borderWidth: 1,
	},
	welcome_text: {
		fontFamily: "DMSans_700Bold",
		fontSize: 40,
		color: "#080738",
		textAlign: "center",
		height: 100,
		position: "absolute",
		top: 28,
		left: 25,
		width: 300,
	},
	first_name_box: {
		width: 300,
		height: 48,
		top: 175,
		left: 25,
		borderColor: "#090838",
		borderWidth: 1,
		fontFamily: "DMSans_400Regular",
		fontSize: 12,
		paddingLeft: 20,
		borderRadius: 20,
	},
	last_name_box: {
		width: 300,
		height: 48,
		top: 210,
		left: 25,
		borderColor: "#090838",
		borderWidth: 1,
		fontFamily: "DMSans_400Regular",
		fontSize: 12,
		paddingLeft: 20,
		borderRadius: 20,
	},
	email_box: {
		width: 300,
		height: 48,
		top: 245,
		left: 25,
		borderColor: "#090838",
		borderWidth: 1,
		fontFamily: "DMSans_400Regular",
		fontSize: 12,
		paddingLeft: 20,
		borderRadius: 20,
	},
	password_box: {
		width: 300,
		height: 48,
		top: 280,
		left: 25,
		borderColor: "#090838",
		borderWidth: 1,
		fontFamily: "DMSans_400Regular",
		fontSize: 12,
		paddingLeft: 20,
		borderRadius: 20,
	},
	login: {
		bottom: 74,
		alignItems: "center",
		backgroundColor: "#090838",
		borderRadius: 24,
		display: "flex",
		height: 48,
		padding: 8,
		left: 46,
		justifyContent: "center",
		position: "absolute",
		width: 256,
	},
	login_text: {
		fontFamily: "DMSans_700Bold",
		fontSize: 14,
		color: "#FFFFFF",
		textAlign: "center",
		position: "relative",
		marginTop: -1,
		lineHeight: 16
	},
});

const Register: React.FC<prop> = () => {
	const [firstName, onEditedFirstName] = React.useState("");
	const [lastName, onEditedLastName] = React.useState("");
	const [email, onEditedText] = React.useState("");
	const [password, onEditedPassword] = React.useState("");

	return (
		<ScrollView contentContainerStyle={styles.welcomePage}>
			<View style={styles.welcomePage1}>
				<Image style={styles.cookByTheBook} source={require("../images/cbtb_nobg.png")} />
				<View style={styles.rectangle_bg}>
					<Text style={styles.welcome_text}>Create Your Account!</Text>
					<TextInput style={styles.first_name_box} onChangeText={onEditedFirstName}
					value={firstName} placeholder="Type in your first name"/>
					<TextInput style={styles.last_name_box} onChangeText={onEditedLastName}
					value={lastName} placeholder="Type in your last name"/>
					<TextInput style={styles.email_box} onChangeText={onEditedText}
					value={email} placeholder="Enter your registered email"/>
					<TextInput style={styles.password_box} onChangeText={onEditedPassword}
					secureTextEntry={true} placeholder="Enter your password"/>
					<Link style={styles.login} href={"/login"} asChild>
						<Pressable>
							<Text style={styles.login_text}>
								REGISTER
							</Text>
						</Pressable>
					</Link>
				</View>
			</View>
		</ScrollView>
	);
};

export default Register;