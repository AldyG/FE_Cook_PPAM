import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { TextInput, HelperText } from 'react-native-paper'
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect, router } from 'expo-router';
import { useAuth } from '../utils/auth';

interface prop {
  // prop halaman
}

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

const Login: React.FC<prop> = () => {
	const [email, onEditedText] = React.useState("");
	const [password, onEditedPassword] = React.useState("");

	const [errors,setErrors] = React.useState({
        email:"",
        password:""
    })

	const { signIn } = useAuth();
	
	const validate = ()=>{
        let newErrors = {
            email:"",
            password:""
        };
        if(!email){
            newErrors.email = "*email is required.";
        }
        if(!password){
            newErrors.password = "*password is required.";
        }
        return newErrors;
    }

    const handleSignIn = () => {
        const findErrors = validate();

        if(Object.values(findErrors).some(value => value !== "")){
            // console.log(findErrors)
            setErrors(findErrors)
        } else {
            signIn(email, password).then(res => {
                // console.log("Login success: ", res)
                router.replace("/(tabs)/home");
            }).catch((error)=>{
                let newErrors = {
                    email: "",
                    password:""
                }
                if(error.code === "auth/invalid-credential"){
                    newErrors.email = "Email or password invalid.";
                }else{
                    newErrors.email = "Something went wrong.";
                }
                setErrors(newErrors)
            })
        }
    }

	return (
		<ScrollView contentContainerStyle={styles.welcomePage}>
			<View style={styles.welcomePage1}>
				<Image style={styles.irreg_cloud} source={require("../images/irreg_cloud.png")} />
				<Image style={styles.cookByTheBook} source={require("../images/cbtb_nobg.png")} />
				<Image style={styles.cook_lady} source={require("../images/happy_cooking.png")} />
				<View style={styles.rectangle_bg}>
					<Text style={styles.welcome_text}>Welcome!</Text>
					<Text style={styles.have_account_text}>Do you have an account? Go right ahead and login!</Text>
					<TextInput style={styles.email_box} onChangeText={(email) => {
						onEditedText(email)
						setErrors(errors => ({...errors, email: ""}))
					}}
					error={errors.email !== ""}
					value={email} placeholder="Enter your email"/>
					<HelperText type="error" visible={errors.email !== ""}>{errors.email}</HelperText>
					<TextInput style={styles.password_box} onChangeText={(password) => {
						onEditedPassword(password)
						setErrors(errors => ({...errors, password: ""}))
					}}
					error={errors.password !== ""}
					value={password} secureTextEntry={true} placeholder="Enter your password"/>
					<HelperText type="error" visible={errors.password !== ""}>{errors.password}</HelperText>
					<Pressable style={styles.login} onPress={handleSignIn}>
						<Text style={styles.login_text}>
							LOGIN
						</Text>
					</Pressable>
					<Text style={styles.dont_have_acc}>Don't have an account?{" "}
						<Link style={styles.reg_now} href={"/register"} asChild>
							<Text style={styles.reg_now}>Register now!</Text>
						</Link>
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Login;