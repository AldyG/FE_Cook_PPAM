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
    borderColor: "#1a1a1a",
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
    borderColor: "#1a1a1a",
    borderRadius: 17,
    height: 179,
    left: 45,
    objectFit: "cover",
    position: "absolute",
    top: 190,
    width: 236
  },
  boxgrouppic: {
    height: 113,
    left: 0,
    objectFit: "cover",
    position: "absolute",
    top: 0.2,
    width: 234.8
  },
  homemadepizza:{
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 12,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 120,
  },
  ratebox: {
    backgroundColor: "#fe9c08",
    borderRadius: 12,
    height: 41,
    left: 185,
    top: 128,
    objectFit: "cover",
    position: "absolute",
    width: 41
  },
  ratingpizza: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 6,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 7,
  },
  byuser123: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: "#909090",
    left: 10,
    position: "absolute",
    top: 150,
    width: 120
  },
  boxgroup1: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#1a1a1a",
    borderRadius: 17,
    height: 179,
    left: 45,
    objectFit: "cover",
    position: "absolute",
    top: 450,
    width: 236
  },
  boxgroup1pic: {
    height: 113,
    left: 0,
    objectFit: "cover",
    position: "absolute",
    top: 0.2,
    width: 234.8
  },
  ratebox1: {
    backgroundColor: "#fe9c08",
    borderRadius: 12,
    height: 41,
    left: 185,
    top: 128,
    objectFit: "cover",
    position: "absolute",
    width: 41
  },
  ratingbruschetta: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 6,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 7,
  },
  prosbrus:{
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 10,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 120,
  },
  byireniaoxford: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: "#909090",
    left: 10,
    position: "absolute",
    top: 150,
    width: 120
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
  recommendations: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 50,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 655,
  },
  recrectangle: {
    backgroundColor: "#05ff00",
    borderWidth: 0,
    height: 116,
    left: 40,
    top: 710,
    position: "absolute",
    borderRadius: 17,
    width: 350,
  },
  recwhiterectangle: {
    backgroundColor: "#ffffff",
    borderWidth: 0,
    height: 101,
    left: 49,
    top: 718,
    position: "absolute",
    borderRadius: 17,
    width: 332,
  },
  rendangpic: {
    height: 89,
    left: 55,
    objectFit: "cover",
    position: "absolute",
    top: 724,
    width: 90,
    borderRadius: 17,
  },
  rendangtext: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 160,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 755,
  },
  byirma: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: "#909090",
    left: 160,
    position: "absolute",
    top: 780,
    width: 120
  },
  watchads: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 270,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 755,
    textDecorationLine: "underline",
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
		width: 20,
	},
	homeicon: {
		height: 25,
		left: 55,
		position: "absolute",
		top: 890,
		width: 25,
	},
  homebox: {
    backgroundColor: "#87e4fd",
    borderRadius: 10,
    height: 40,
    left: 47,
    objectFit: "cover",
    position: "absolute",
    top: 883,
    width: 41,
  },
	postrecipeicon: {
		height: 25,
		left: 160,
		position: "absolute",
		top: 890,
		width: 25,
	},
	collectionicon: {
		height: 25,
		left: 260,
		position: "absolute",
		top: 890,
		width: 25,
	},
	profileicon: {
		height: 25,
		left: 355,
		position: "absolute",
		top: 890,
		width: 25,
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
          <View style={styles.ratebox}>
          <Text style={styles.ratingpizza}>4.5</Text>
          </View>
          <Image style={styles.boxgrouppic} source={require("../../images/pizza.png")}/>
          <Text style={styles.homemadepizza}>Homemade Pizza</Text>
          <Text style={styles.byuser123}>By User123</Text>
        </View>
        <View style={styles.boxgroup1}>
          <View style={styles.ratebox1}>
            <Text style={styles.ratingbruschetta}>4.5</Text>
          </View>
          <Image style={styles.boxgroup1pic} source={require("../../images/bruschetta.png")}/>
          <Text style={styles.prosbrus}>Bruschetta</Text>
          <Text style={styles.byireniaoxford}>By Irenia Oxford</Text>
        </View>
        <Text style={styles.trendingrecipes}>Trending Recipes</Text>
        <Text style={styles.newrecipes}>New recipes</Text>
        <Text style={styles.recommendations}>Recommendations</Text>
        <View style={styles.recrectangle}></View>
          <View style={styles.recwhiterectangle}></View>
            <Image style= {styles.rendangpic} source={require("../../images/rendang.png")}/>
            <Text style={styles.rendangtext}>Rendang</Text>
            <Text style={styles.byirma}>By Irma</Text>
            <Text style={styles.watchads}>Watch Ad!</Text>
        <View style={styles.navbarbox}></View>
          <View style={styles.homebox}></View>
				    <Image style= {styles.homeicon} source={require("../../images/home_1.png")}/>
				  <Image style= {styles.postrecipeicon} source={require("../../images/book_open.png")}/>
				  <Image style= {styles.collectionicon} source={require("../../images/heart_1.png")}/>
				  <Image style= {styles.profileicon} source={require("../../images/user_1.png")}/>
			</View>
		</ScrollView>
	);
};

export default Home;