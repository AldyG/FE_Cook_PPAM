import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { router } from "expo-router";
import { auth, db } from '../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { stringMd5 } from 'react-native-quick-md5';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        if (user) {
			const ref = await addDoc(collection(db, 'users'),{
				email: email,
				password: stringMd5(password),
				recipeID: [],
				tier: false
			});
			console.log("New user added with ID: ", ref.id);
			router.push("/register");
		}
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

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
			width: 213,
		},
		rectangle_bg: {
			backgroundColor: "#EEFAFF",
			borderRadius: 65,
			height: 600,
			left: 40,
			position: "absolute",
			top: 175,
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
			top: 18,
			left: 25,
			width: 300,
		},
		first_name_box: {
			width: 300,
			height: 48,
			top: 155,
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
			top: 190,
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
			top: 225,
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
			top: 260,
			left: 25,
			borderColor: "#090838",
			borderWidth: 1,
			fontFamily: "DMSans_400Regular",
			fontSize: 12,
			paddingLeft: 20,
			borderRadius: 20,
		},
		register: {
			bottom: 65,
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
		register_text: {
			fontFamily: "DMSans_700Bold",
			fontSize: 14,
			color: "#FFFFFF",
			textAlign: "center",
			position: "relative",
			marginTop: -1,
			lineHeight: 16
		},
		have_acc: {
			fontFamily: "DMSans_400Regular",
			fontSize: 12,
			color: "#080738",
			textAlign: "center",
			position: "absolute",
			bottom: 26,
			left: 50,
			width: 250,
		},
		signin_now: {
			textDecorationLine: "underline",
		},
	});

	return (
		<View style={styles.welcomePage}>
			<View style={styles.welcomePage1}>
				<Image style={styles.cookByTheBook} source={require("../images/cbtb_nobg.png")} />
				<View style={styles.rectangle_bg}>
					<Text style={styles.welcome_text}>Create Your Account!</Text>
					<TextInput style={styles.first_name_box} onChangeText={(firstName) => setFirstName(firstName)}
					value={firstName} placeholder="Type in your first name"/>
					<TextInput style={styles.last_name_box} onChangeText={(lastName) => setLastName(lastName)}
					value={lastName} placeholder="Type in your last name"/>
					<TextInput style={styles.email_box} onChangeText={(email) => setEmail(email)}
					value={email} placeholder="Enter your registered email"/>
					<TextInput style={styles.password_box} onChangeText={(password) => setPassword(password)}
					value={password} secureTextEntry={true} placeholder="Enter your password"/>
					<Pressable style={styles.register} onPress={handleRegister}>
						<Text style={styles.register_text}>
							REGISTER
						</Text>
					</Pressable>
					<Text style={styles.have_acc}>Already have an account?{" "}
						<Link style={styles.signin_now} href={"/login"} push asChild>
							<Text style={styles.signin_now}>Sign in now!</Text>
						</Link>
					</Text>
				</View>
			</View>
		</View>
	);
};
