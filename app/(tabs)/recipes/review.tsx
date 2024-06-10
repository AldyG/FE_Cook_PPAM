import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	reviewbg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  review1: {
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
		height: 55,
		left: 0,
		position: "absolute",
		top: 40,
		width: 430,
	},
  blueberrycheesecake: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 20,
    left: 65,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 14,
  },
  backarrow: {
		height: 20,
		left: 35,
		position: "absolute",
		top: 16,
		width: 20
	},
  ratingscomments: {
    height: 48,
    width: 260,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.01,
    fontSize: 18,
    left: 40,
    top: 110,
    position: "absolute"
  },
  commentbox1: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 98,
    left: 35,
    position: "absolute",
    top: 150,
    width: 360,
  },
  userprofile: {
    height: 16,
    width: 80,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16,
    position: "absolute",
    top: 15,
    left: 50,
  },
  reviewtext: {
    height: 50,
    width: 270,
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 10,
    left: 50,
    top: 35,
    lineHeight: 16,
    textAlign: "justify",
    position: "absolute",
  },
  profileicon: {
    height: 35,
    left: 8,
    position: "absolute",
    top: 8,
    width: 35,
  },
});

const Rev: React.FC<prop> = () => {
  return (
    <ScrollView contentContainerStyle={styles.reviewbg}>
      <View style={styles.review1}>
        <View style={styles.boxrectangle}>
          <Text style={styles.blueberrycheesecake}>Blueberry Cheesecake</Text>
          <Image style= {styles.backarrow} source={require("../../../images/backarrow2.png")}/>
        </View>
        <Text style={styles.ratingscomments}>Ratings & Comments</Text>
        <View style={styles.commentbox1}>
          <Image style= {styles.profileicon} source={require("../../../images/user_circle.png")}/>
          <Text style={styles.userprofile}>GuobaKing</Text>
          <Text style={styles.reviewtext}>Well, I also put some blueberries in the batter -- YUM. I also used one of the premade crusts and it was so so delicious!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Rev;