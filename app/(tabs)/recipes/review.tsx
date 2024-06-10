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
		top: 0,
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
    top: 70,
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
    top: 110,
    width: 360,
  },
  userprofile: {
    height: 16,
    width: 100,
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
    height: 130,
    width: 265,
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
  ratingbox: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    borderRadius: 12,
    height: 35,
    left: 316,
    position: "absolute",
    top: 6,
    width: 36,
  },
  ratingnumber: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 3,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 3,
  },
  commentbox2: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 133,
    left: 35,
    position: "absolute",
    top: 220,
    width: 360,
  },
  commentbox3: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 154,
    left: 35,
    position: "absolute",
    top: 366,
    width: 360,
  },
  commentbox4: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 154,
    left: 35,
    position: "absolute",
    top: 533,
    width: 360,
  },
  leavearating: {
    height: 48,
    width: 260,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.01,
    fontSize: 18,
    left: 40,
    top: 700,
    position: "absolute"
  },
  outerratingbox: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    borderRadius: 12,
    height: 35,
    left: 190,
    position: "absolute",
    top: 698,
    width: 36,
  },
  inputbox: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 41,
    left: 35,
    position: "absolute",
    top: 745,
    width: 360,
  },
  commentinput: {
    color: "#909090",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 10,
    top: 8,
    width: 172
  }
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
          <View style={styles.ratingbox}>
            <Text style={styles.ratingnumber}>5.0</Text>
          </View>
        </View>
        <View style={styles.commentbox2}>
          <Image style= {styles.profileicon} source={require("../../../images/user_circle.png")}/>
          <Text style={styles.userprofile}>IgnisScientia</Text>
          <Text style={styles.reviewtext}>The recipe provides clear instructions, making it accessible even for those with limited baking experience. However, while the end result is tasty, it doesn't quite reach the heights of some other cheesecake recipes I've tried.</Text>
          <View style={styles.ratingbox}>
            <Text style={styles.ratingnumber}>3.9</Text>
          </View>
        </View>
        <View style={styles.commentbox3}>
          <Image style= {styles.profileicon} source={require("../../../images/user_circle.png")}/>
          <Text style={styles.userprofile}>TingyunNeck</Text>
          <Text style={styles.reviewtext}>While the recipe itself is straightforward and easy to follow, I found that the baking time needed some adjustment to achieve the perfect consistency. Additionally, I would recommend adding a touch more sweetness to the cheesecake filling to balance out the tartness of the blueberries.</Text>
          <View style={styles.ratingbox}>
            <Text style={styles.ratingnumber}>4.0</Text>
          </View>
        </View>
        <View style={styles.commentbox4}>
          <Image style= {styles.profileicon} source={require("../../../images/user_circle.png")}/>
          <Text style={styles.userprofile}>ServalLandau</Text>
          <Text style={styles.reviewtext}>This recipe for blueberry cheesecake is a true triumph! From its velvety smooth texture to the burst of sweet-tart blueberries in every bite, it's a dessert dream come true. The creamy cheesecake layer perfectly complements the vibrant blueberry topping.</Text>
          <View style={styles.ratingbox}>
            <Text style={styles.ratingnumber}>4.8</Text>
          </View>
        </View>
        <Text style={styles.leavearating}>Leave a Rating:</Text>
        <View style={styles.outerratingbox}></View>
        <View style={styles.inputbox}>
          <Text style={styles.commentinput}>Leave a comment...</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Rev;