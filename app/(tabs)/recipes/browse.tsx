import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	browsingbg: {
        backgroundColor: "#edf9ff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
	recipebrowsing1: {
		backgroundColor: "#edf9ff",
		height: 932,
		position: "relative",
		width: 430,
	},
	searchman: {
		height: 461,
		left: 53,
		objectFit: "cover",
		position: "absolute",
		top: 200,
		width: 337,
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
		top: 870,
		width: 430
	},
  	examplefish: {
    	fontFamily: "DMSans_400Regular",
    	fontSize: 16,
    	color: "#909090",
    	left: 70,
    	position: "absolute",
    	top: 16,
    	width: 109
  	},
	backarrow: {
		height: 22,
		left: 35,
		position: "absolute",
		top: 16,
		width: 20
	},
	homeicon: {
		height: 25,
		left: 55,
		position: "absolute",
		top: 890,
		width: 25
	},
	postrecipeicon: {
		height: 25,
		left: 160,
		position: "absolute",
		top: 890,
		width: 25
	},
	collectionicon: {
		height: 25,
		left: 260,
		position: "absolute",
		top: 890,
		width: 25
	},
	profileicon: {
		height: 25,
		left: 355,
		position: "absolute",
		top: 890,
		width: 25
	}
});

const Browse: React.FC<prop> = () => {
	const [text, onEditedText] = React.useState("");
	const [password, onEditedPassword] = React.useState("");

	return (
		<ScrollView contentContainerStyle={styles.browsingbg}>
			<View style={styles.recipebrowsing1}>
				<Image style={styles.searchman} source={require("../../../images/searchingman.png")} />
				<View style={styles.boxrectangle}>
          			<Text style={styles.examplefish}>Example: fish</Text>
          			<Image style= {styles.backarrow} source={require("../../../images/backarrow.png")}/>
				</View>
        		<View style={styles.navbarbox}></View>
					<Image style= {styles.homeicon} source={require("../../../images/home_1.png")}/>
					<Image style= {styles.postrecipeicon} source={require("../../../images/book_open.png")}/>
					<Image style= {styles.collectionicon} source={require("../../../images/heart_1.png")}/>
					<Image style= {styles.profileicon} source={require("../../../images/user_1.png")}/>
			</View>
		</ScrollView>
	);
};

export default Browse;