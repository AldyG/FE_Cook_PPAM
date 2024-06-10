import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput, PixelRatio } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
	// prop halaman
}

const pixel_ratio = PixelRatio.get();

const styles = StyleSheet.create({
	browsingbg: {
		backgroundColor: "#edf9ff",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},
	profile_base: {
		backgroundColor: "#edf9ff",
		height: 900,
		position: "relative",
		width: 430,
	},
	profile_header: {
		fontFamily: "DMSans_700Bold",
		fontSize: 20,
		color: "#080738",
		width: 120,
		left: (460 / pixel_ratio),
		top: 15
	},
	identity_box: {
		height: 124,
		left: (17 / pixel_ratio),
		position: "absolute",
		top: -30,
		width: 430,
	},
	user_logo: {
		height: 124,
		resizeMode: "contain",
		left: 30,
		position: "relative",
		top: 118,
	},
	profile_username: {
		fontFamily: "DMSans_700Bold",
		fontSize: 20,
		color: "#080738",
		width: 230,
		left: (460 / pixel_ratio),
		top: 0
	},
	profile_name: {
		fontFamily: "DMSans_400Regular",
		fontSize: 16,
		color: "#080738",
		width: 247,
		left: (460 / pixel_ratio),
		top: 5
	
	},
	edit: {
		bottom: 74,
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderRadius: 13,
		borderColor: "#87e4fd",
		borderWidth: 0.5,
		display: "flex",
		height: 33,
		padding: 8,
		left: 168,
		top: 12,
		justifyContent: "center",
		width: 112,
	},
	edit_text: {
		fontFamily: "DMSans_400Regular",
		fontSize: 14,
		color: "#080738",
		textAlign: "center",
		top: -1,
	},
	upgrade: {
		bottom: 74,
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderRadius: 13,
		borderColor: "#05ff00",
		borderWidth: 1,
		display: "flex",
		height: 33,
		padding: 8,
		left: 168,
		top: 17,
		justifyContent: "center",
		width: 112,
	},
	upgrade_text: {
		fontFamily: "DMSans_700Bold",
		fontSize: 13,
		lineHeight: 14,
		color: "#080738",
		textAlign: "center",
		top: 2,
	},
	biography: {
		color: "#080738",
		fontFamily: "DMSans_700Bold",
		fontSize: 18,
		height: 100,
		left: 36,
		position: "absolute",
		top: 270,
		width: 192,
	},
	bio_text: {
		color: "#080738",
		fontFamily: "DMSans_400Regular",
		fontSize: 14,
		height: 65,
		left: 36,
		position: "absolute",
		top: 300,
		width: 355,
		borderRadius: 13,
		borderWidth: 0.5,
		borderColor: "#87e4fd",
		backgroundColor: "#ffffff",
		padding: 10,
	},
	rec_view_rec: {
		color: "#080738",
		fontFamily: "DMSans_700Bold",
		fontSize: 18,
		height: 100,
		left: 36,
		position: "absolute",
		top: 380,
		width: 300,
	},
	recipe1: {
		height: 170,
		left: 36,
		position: "absolute",
		top: 430,
		width: 355,
		borderRadius: 17,
		backgroundColor: "#ffffff",
	},
	name_recipe: {
		color: "#080738",
		fontFamily: "DMSans_700Bold",
		fontSize: 20,
		height: 100,
		width: 155,
		top: 11,
		left: 12
	},
	creator: {
		color: "#6a7582",
		fontFamily: "DMSans_400Regular",
		fontSize: 12,
		letterSpacing: 0.5,
		height: 100,
		width: 155,
		bottom: -45,
		left: 12
	},
	food_pic: {
		height: 170,
		width: 162,
		objectFit: "cover",
		right: 0,
		position: "absolute",
		top: 0,
	},
	recipe2: {
		height: 170,
		left: 36,
		position: "absolute",
		top: 625,
		width: 355,
		borderRadius: 17,
		backgroundColor: "#ffffff",
	},
	box: {
		height: 55,
		width: 430,
	},
	boxrectangle: {
		backgroundColor: "#87e4fd",
		height: 55,
		left: 0,
		position: "absolute",
		top: 0,
		width: 430,
	},
	navbarbox: {
		backgroundColor: "#ffffff",
		height: 63,
		left: 0,
		position: "absolute",
		bottom: 0,
		width: "100%"
	},
	homeicon: {
		height: 25,
		left: 55,
		position: "absolute",
		bottom: 20,
		width: 25
	},
	postrecipeicon: {
		height: 25,
		left: 160,
		position: "absolute",
		bottom: 20,
		width: 25
	},
	collectionicon: {
		height: 25,
		left: 260,
		position: "absolute",
		bottom: 20,
		width: 25
	},
	profileicon: {
		height: 25,
		left: 355,
		position: "absolute",
		bottom: 20,
		width: 25
	},
	profilebox: {
		backgroundColor: "#87e4fd",
		borderRadius: 10,
		height: 40,
		right: 42,
		objectFit: "cover",
		position: "absolute",
		bottom: 13,
		width: 41,
	},
});

const Profile: React.FC<prop> = () => {
	return (
		<ScrollView contentContainerStyle={styles.browsingbg}>
			<View style={styles.profile_base}>
				<View style={styles.boxrectangle}>
					<Text style={styles.profile_header}>My Profile</Text>
				</View>
				<View style={styles.identity_box}>
					<Image style={styles.user_logo} source={require("../../images/user_circle.png")}/>
					<Text style={styles.profile_username}>UserWOW!BRAVO!</Text>
					<Text style={styles.profile_name}>Mellstroy_Impostor</Text>
					<Link style={styles.edit} href={"/(tabs)/profiling/change-profile"} asChild>
						<Pressable>
							<Text style={styles.edit_text}>
								Edit Profile
							</Text>
						</Pressable>
					</Link>
					<Link style={styles.upgrade} href={"/(tabs)/profiling/upgrade"} asChild>
						<Pressable>
							<Text style={styles.upgrade_text}>
								Upgrade Now!
							</Text>
						</Pressable>
					</Link>
				</View>
				<Text style={styles.biography}>Biography</Text>
				<Text style={styles.bio_text}>AM AM AM {"\n"}AM AM AM AM AM AM AM AM AM</Text>
				<Text style={styles.rec_view_rec}>Recently Viewed Recipes</Text>
				<View style={styles.recipe1}>
					<Text style={styles.name_recipe}>Strawberry Cheesecake</Text>
					<Text style={styles.creator}>by Nettie Wright</Text>
					<Image style={styles.food_pic} source={require("../../images/straw_cheese.png")}/>
				</View>
				<View style={styles.recipe2}>
					<Text style={styles.name_recipe}>No-Bake Cheesecake</Text>
					<Text style={styles.creator}>by Osmanthus Wine</Text>
					<Image style={styles.food_pic} source={require("../../images/nob_cheese.png")}/>
				</View>
				<View style={styles.navbarbox}></View>
				<Image style= {styles.homeicon} source={require("../../images/home_1.png")}/>
				<Image style= {styles.postrecipeicon} source={require("../../images/book_open.png")}/>
				<Image style= {styles.collectionicon} source={require("../../images/heart_1.png")}/>
				<View style={styles.profilebox}></View>
				<Image style= {styles.profileicon} source={require("../../images/user_1.png")}/>
			</View>
		</ScrollView>
	);
};

export default Profile;