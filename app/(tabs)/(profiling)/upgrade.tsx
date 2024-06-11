import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link, router } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	upgradebg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  upgrade1: {
		backgroundColor: "#edf9ff",
		height: 900,
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
  upgrade_header: {
    fontFamily: "DMSans_700Bold",
    fontSize: 20,
    color: "#080738",
    width: 250,
    left: 70,
    top: 11
  },
  backarrow: {
    height: 20,
    left: 35,
    position: "absolute",
    top: 16,
    width: 20
  },
  backgroundStar: {
    height: 188,
    width: 371,
    top: 100,
    left: 31,
    position: "absolute"
  },
  intersect: {
    height: 157,
    left: 0,
    top: 680,
    position: "absolute",
    width: 430
  },
  benefitbox: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    borderRadius: 13,
    height: 140,
    left: 44,
    top: 160,
    width: 345
  },
  benefits: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 6,
    top: 1,
    lineHeight: 24,
    position: "absolute",
    textAlign: "justify",
    width: 350,
  },
  benefitdesc: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    left: 30,
    top: 23,
    lineHeight: 25,
    position: "absolute",
    textAlign: "justify",
    width: 350,
  },
  subscriptionlabel: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 50,
    top: 440,
    width: 192,
    lineHeight: 24,
    position: "absolute",
  },
  hargasubscription: {
    color: "#51b0f4",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 10,
    top: 10,
    lineHeight: 24,
    position: "absolute",
    textAlign: "justify",
    width: 350,
  },
  subbox: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    borderRadius: 13,
    height: 50,
    left: 44,
    top: 230,
    width: 345
  },
  dots: {
    height: 100,
    left: 12,
    position: "absolute",
    top: 30,
    width: 10
  },
  happyman: {
    height: 249,
    left: 72,
    objectFit: "cover",
    position: "absolute",
    top: 590,
    width: 279
  },
  subscribebutton: {
    height: 50,
    width: 200,
    backgroundColor: "#090838",
    borderRadius: 10,
    left: 111,
    top: 280,
  },
  subscribetext: {
    fontFamily: "DMSans_700Bold",
    color: "#ffffff",
    fontSize: 16,
    left: 50,
    top: 12,
  },
  bigtitle: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 30,
    lineHeight: 34,
    textAlign: "center",
    height: 120,
    width: 300,
    left: 67,
    top: 185,
    objectFit: "cover",
  }
});

const Upgrade: React.FC<prop> = () => {
  return (
    <ScrollView contentContainerStyle={styles.upgradebg}>
      <View style={styles.upgrade1}>
          <Pressable style={styles.boxrectangle} onPress={() => router.push("../profile")}>
            <Text style={styles.upgrade_header}>Upgrade your Account</Text>
            <Image style= {styles.backarrow} source={require("../../../images/backarrow2.png")}/>
          </Pressable>
        <Image style= {styles.backgroundStar} source={require("../../../images/star.png")}/>
        <Text style={styles.bigtitle}>Save and Collect Unlimited Recipes!</Text>
        <View style={styles.benefitbox}>
          <Text style={styles.benefits}>Benefits</Text>
          <Image style= {styles.dots} source={require("../../../images/dots.png")}/>
          <Text style={styles.benefitdesc}>Save unlimited recipes!{"\n"}Access video instructions!{"\n"}No ads!{"\n"}Add unlimited recipes!</Text>
        </View>
        <Text style={styles.subscriptionlabel}>Subscription</Text>
        <View style={styles.subbox}>
          <Text style={styles.hargasubscription}>Rp 100.000,00</Text>
        </View>
        <Image style= {styles.intersect} source={require("../../../images/intersect.png")}/>
        <Image style= {styles.happyman} source={require("../../../images/happyman.png")}/>
        <Link style={styles.subscribebutton} href={"/(tabs)/profiling/payment"} asChild push>
          <Pressable>
            <Text style={styles.subscribetext}>SUBSCRIBE</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Upgrade;