import { StyleSheet, TextInput, Text, View, Pressable, ScrollView, Image, BackHandler } from "react-native";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) router.replace("/home");
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

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
		irreg_cloud: {
			height: 450,
			top: 107,
			left: 0,
			position: "absolute",
			width: 430,
			resizeMode: "contain"
		},
		cook_lady: {
			height: 228,
			top: 190,
			left: 103,
			objectFit: "cover",
			position: "absolute",
			width: 223,
		},
		rectangle_bg: {
			backgroundColor: "#EEFAFF",
			borderRadius: 65,
			height: 463,
			left: 40,
			position: "absolute",
			top: 396,
			width: 350,
			borderColor: "black",
			borderWidth: 1,
		},
		welcome_text: {
			fontFamily: "DMSans_700Bold",
			fontSize: 40,
			color: "#080738",
			textAlign: "center",
			height: 50,
			position: "absolute",
			top: 28,
			left: 75,
			width: 200,
		},
		have_account_text: {
			fontFamily: "DMSans_400Regular",
			fontSize: 12,
			color: "#080738",
			textAlign: "center",
			position: "absolute",
			top: 115,
			left: 25,
			width: 300,
		},
		email_box: {
			width: 300,
			height: 48,
			top: 180,
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
			top: 216,
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
			borderRadius: 10,
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
		dont_have_acc: {
			fontFamily: "DMSans_400Regular",
			fontSize: 12,
			color: "#080738",
			textAlign: "center",
			position: "absolute",
			bottom: 30,
			left: 50,
			width: 250,
		},
		reg_now: {
			textDecorationLine: "underline",
		},
	});

	return (
		<ScrollView contentContainerStyle={styles.welcomePage}>
			<View style={styles.welcomePage1}>
				<Image style={styles.irreg_cloud} source={require("../images/irreg_cloud.png")} />
				<Image style={styles.cookByTheBook} source={require("../images/cbtb_nobg.png")} />
				<Image style={styles.cook_lady} source={require("../images/happy_cooking.png")} />
				<View style={styles.rectangle_bg}>
					<Text style={styles.welcome_text}>Welcome!</Text>
					<Text style={styles.have_account_text}>Do you have an account? Go right ahead and login!</Text>
					<TextInput style={styles.email_box} onChangeText={(email) => setEmail(email)}
					value={email} placeholder="Enter your email"/>
					<TextInput style={styles.password_box} onChangeText={(password) => setPassword(password)}
					value={password} secureTextEntry={true} placeholder="Enter your password"/>
					<Pressable style={styles.login} onPress={() => handleLogin()}>
						<Text style={styles.login_text}>
							LOGIN
						</Text>
					</Pressable>
					<Text style={styles.dont_have_acc}>Don't have an account?{" "}
						<Link style={styles.reg_now} href={"/register"} push asChild>
							<Text style={styles.reg_now}>Register now!</Text>
						</Link>
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};