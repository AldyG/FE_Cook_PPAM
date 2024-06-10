import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	collectionbg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  collection1: {
		backgroundColor: "#edf9ff",
		height: 1000,
		position: "relative",
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
  Recipecollection: {
    height: 48,
    width: 234,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 20,
    left: 120,
    top: 15,
    position: "absolute"
  },
  collectedtext: {
    height: 24,
    width: 211,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 45,
    top: 75,
    position: "absolute",
  },
  kwetiausirambox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#1a1a1a",
    height: 234,
    left: 42,
    position: "absolute",
    top: 120,
    width: 343,
  },
  kwetiausirampic: {
    height: 166,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
    objectFit: "cover"
  },
  kwetiautext: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 15,
    top: 175,
    position: "absolute",
  },
  byacung: {
    color: "#909090",
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    left: 15,
    top: 200,
    position: "absolute",
  },
  sotobox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#1a1a1a",
    height: 234,
    left: 42,
    position: "absolute",
    top: 400,
    width: 343,
  },
  sotopic: {
    height: 166,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
    objectFit: "cover"
  },
  sototext: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 15,
    top: 175,
    position: "absolute",
  },
  bymakcuy: {
    color: "#909090",
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    left: 15,
    top: 200,
    position: "absolute",
  },
  beeflasagnabox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#1a1a1a",
    height: 234,
    left: 42,
    position: "absolute",
    top: 680,
    width: 343,
  },
  lasagnapic: {
    height: 166,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
    objectFit: "cover"
  },
  lasagnatext: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 15,
    top: 175,
    position: "absolute",
  },
  bygarfield: {
    color: "#909090",
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    left: 15,
    top: 200,
    position: "absolute",
  },
  ratebox: {
    backgroundColor: "#fe9c08",
    borderRadius: 12,
    height: 41,
    left: 290,
    top: 110,
    objectFit: "cover",
    position: "absolute",
    width: 41
  },
  rating: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 6,
    letterSpacing: 0,
    lineHeight: 24,
    position: "absolute",
    top: 7,
  },
});

const Collection: React.FC<prop> = () => {
  const [text, onEditedText] = React.useState("");
	const [password, onEditedPassword] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.collectionbg}>
      <View style={styles.collection1}>
        <View style={styles.boxrectangle}>
          <Text style={styles.Recipecollection}>Recipe Collection</Text>
        </View>
        <Text style={styles.collectedtext}>Collected Recipes (3)</Text>
        <View style={styles.kwetiausirambox}>
          <Image style={styles.kwetiausirampic} source={require("../../images/kwetiausiram.png")} alt="kwetiausiram"/>
          <Text style={styles.kwetiautext}>Kwetiau Siram</Text>
          <Text style={styles.byacung}>By Acung</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
        <View style={styles.sotobox}>
          <Image style={styles.sotopic} source={require("../../images/soto.png")} alt="soto"/>
          <Text style={styles.sototext}>Soto Betawi</Text>
          <Text style={styles.bymakcuy}>By MakCuy</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>4.0</Text>
          </View>
        </View>
        <View style={styles.beeflasagnabox}>
          <Image style={styles.lasagnapic} source={require("../../images/lasagna.png")} alt="lasagna"/>
          <Text style={styles.lasagnatext}>Beef Lasagna</Text>
          <Text style={styles.bygarfield}>By Garfield</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>5.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
	);
};

export default Collection;