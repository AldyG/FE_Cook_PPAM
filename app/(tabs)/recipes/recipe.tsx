import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	recipebg: {
    backgroundColor: "#87e4fd",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  recipe1: {
		backgroundColor: "#87e4fd",
		height: 932,
		position: "relative",
		width: 430,
	},
  cheesecakepic: {
    height: 291,
    left: 0,
    objectFit: "cover",
    position: "absolute",
    top: 0,
  },
  blueberrycheesecake: {
    height: 48,
    width: 260,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.01,
    fontSize: 20,
    left: 40,
    top: 305,
    position: "absolute"
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
  ratebox: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    height: 41,
    left: 290,
    top: 300,
    objectFit: "cover",
    position: "absolute",
    width: 41
  },
  rordongamsay: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    left: 85,
    top: 342,
    position: "absolute",
    height: 20,
    width: 155,
  },
  line1: {
    backgroundColor: "#000000",
		height: 1,
    width: 355,
    left: 40,
    top: 380,
    position: "absolute"
	},
  ingredients: {
    height: 48,
    width: 260,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.01,
    fontSize: 18,
    left: 40,
    top: 400,
    position: "absolute"
  },
  ing1:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 430,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing2:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 460,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing3:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 490,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing4:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 520,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing5:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 550,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing6:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 580,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing7:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 610,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing8:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 640,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing9:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 670,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing10:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 700,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing11:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 740,
    position: "absolute",
    height: 30,
    width: 300,
  },
  line2: {
    backgroundColor: "#000000",
		height: 1.2,
    width: 355,
    left: 40,
    top: 790,
    position: "absolute"
	},
  instructions: {
    height: 48,
    width: 260,
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.01,
    fontSize: 18,
    left: 40,
    top: 810,
    position: "absolute"
  },
});

const Rec: React.FC<prop> = () => {
  return (
    <ScrollView contentContainerStyle={styles.recipebg}>
      <View style={styles.recipe1}>
        <Image style={styles.cheesecakepic} source={require("../../../images/bcheesecake.png")} alt="bck"/>
        <Text style={styles.blueberrycheesecake}>Blueberry Cheesecake</Text>
        <Text style={styles.rordongamsay}>Rordon Gamsay</Text>
        <View style={styles.ratebox}>
          <Text style={styles.rating}>4.5</Text>
        </View>
        <View style={styles.line1}></View>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text style={styles.ing1}>1 cup graham cracker crumbs</Text>
        <Text style={styles.ing2}>¼ cup melted butter</Text>
        <Text style={styles.ing3}>2 tablespoons white sugar</Text>
        <Text style={styles.ing4}>2 (8 ounce) packages cream cheese, softenedr</Text>
        <Text style={styles.ing5}>1 cup sour cream</Text>
        <Text style={styles.ing6}>¾ cup white sugar</Text>
        <Text style={styles.ing7}>2 tablespoons all-purpose flour</Text>
        <Text style={styles.ing8}>1 teaspoon vanilla extract</Text>
        <Text style={styles.ing9}>4 large eggs</Text>
        <Text style={styles.ing10}>2 cups frozen blueberries, dry pack</Text>
        <Text style={styles.ing11}>⅓ cup blueberry jelly</Text>
        <View style={styles.line2}></View>
        <Text style={styles.instructions}>Instructions</Text>
      </View>
    </ScrollView>
  );
};

export default Rec;