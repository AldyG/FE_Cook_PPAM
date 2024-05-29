import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	homebg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    },
	home1: {
		backgroundColor: "#edf9ff",
		height: 932,
		position: "relative",
		width: 430,
	},
	box: {
		height: 55,
		width: 430,
	},
	boxrectangle: {
		backgroundColor: "#87e4fd",
		height: 119,
		left: 0,
		position: "absolute",
		top: 0,
		width: 430,
	},
  searchbox: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    borderRadius: 17,
    height: 40,
    left: 40,
    position: "absolute",
    top: 60,
    width: 350
  },
  boxgroup: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    borderRadius: 17,
    height: 179,
    left: 45,
    objectFit: "cover",
    position: "absolute",
    top: 190,
    width: 236
  },
  boxgroup1: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    borderRadius: 17,
    height: 179,
    left: 45,
    objectFit: "cover",
    position: "absolute",
    top: 450,
    width: 236
  },
  searchrecipe: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: "#909090",
    left: 45,
    position: "absolute",
    top: 9,
    width: 120
  },
  trendingrecipes: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 50,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 140,
  },
  newrecipes: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 50,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 395,
  },
	navbarbox: {
		backgroundColor: "#ffffff",
		height: 63,
		left: 0,
		position: "absolute",
		top: 870,
		width: 430,
	},
  searchicon: {
		height: 22,
		left: 15,
		position: "absolute",
		top: 8,
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

const Home: React.FC<prop> = () => {
	const [text, onEditedText] = React.useState("");
	const [password, onEditedPassword] = React.useState("");

	return (
		<ScrollView contentContainerStyle={styles.homebg}>
			<View style={styles.home1}>
        <View style={styles.boxrectangle}>
          <View style={styles.searchbox}>
            <Image style={styles.searchicon} source={require("../../images/searchicon.png")}/>
            <Text style={styles.searchrecipe}>Search recipes</Text>
          </View>
        </View>
        <View style={styles.boxgroup}>
        </View>
        <View style={styles.boxgroup1}>
        </View>
        <Text style={styles.trendingrecipes}>Trending Recipes</Text>
        <Text style={styles.newrecipes}>New recipes</Text>
        <View style={styles.navbarbox}></View>
				  <Image style= {styles.homeicon} source={require("../../images/home_1.png")}/>
				  <Image style= {styles.postrecipeicon} source={require("../../images/book_open.png")}/>
				  <Image style= {styles.collectionicon} source={require("../../images/heart_1.png")}/>
				  <Image style= {styles.profileicon} source={require("../../images/user_1.png")}/>
			</View>
		</ScrollView>
	);
};

export default Home;