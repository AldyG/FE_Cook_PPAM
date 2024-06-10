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
		height: 1500,
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
  profileicon: {
    height: 35,
    left: 38,
    position: "absolute",
    top: 335,
    width: 35,
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
    left: 80,
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
    top: 435,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing2:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 465,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing3:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 495,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing4:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 525,
    position: "absolute",
    height: 30,
    width: 400,
  },
  ing5:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 555,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing6:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 585,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing7:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 615,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing8:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 645,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing9:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 675,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing10:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 705,
    position: "absolute",
    height: 30,
    width: 300,
  },
  ing11:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 735,
    position: "absolute",
    height: 30,
    width: 300,
  },
  line2: {
    backgroundColor: "#000000",
		height: 1.2,
    width: 355,
    left: 40,
    top: 780,
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
    top: 800,
    position: "absolute"
  },
  inst1:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 840,
    position: "absolute",
    height: 30,
    width: 300,
  },
  inst2:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 870,
    position: "absolute",
    height: 150,
    width: 320,
  },
  inst3:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 970,
    position: "absolute",
    height: 150,
    width: 320,
  },
  inst4:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 1090,
    position: "absolute",
    height: 150,
    width: 320,
  },
  inst5:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 1140,
    position: "absolute",
    height: 100,
    width: 330,
  },
  inst6:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 1212,
    position: "absolute",
    height: 100,
    width: 320,
  },
  inst7:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 1285,
    position: "absolute",
    height: 100,
    width: 320,
  },
  inst8:{
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    left: 40,
    top: 1385,
    position: "absolute",
    height: 100,
    width: 320,
  },
  backwhite: {
      height: 20,
      left: 35,
      position: "absolute",
      top: 40,
      width: 20
    },
});

const Rec: React.FC<prop> = () => {
  return (
    <ScrollView contentContainerStyle={styles.recipebg}>
      <View style={styles.recipe1}>
        <Image style={styles.cheesecakepic} source={require("../../../images/bcheesecake.png")} alt="bck"/>
        <Image style= {styles.backwhite} source={require("../../../images/backwhite.png")} alt="wht"/>
        <Text style={styles.blueberrycheesecake}>Blueberry Cheesecake</Text>
        <Image style={styles.profileicon} source={require("../../../images/user_circle.png")} alt="proficon"/>
        <Text style={styles.rordongamsay}>Rordon Gamsay</Text>
        <View style={styles.ratebox}>
          <Text style={styles.rating}>4.5</Text>
        </View>
        <View style={styles.line1}></View>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text style={styles.ing1}>1 cup graham cracker crumbs</Text>
        <Text style={styles.ing2}>¼ cup melted butter</Text>
        <Text style={styles.ing3}>2 tablespoons white sugar</Text>
        <Text style={styles.ing4}>2 packages softened cream cheese</Text>
        <Text style={styles.ing5}>1 cup sour cream</Text>
        <Text style={styles.ing6}>¾ cup white sugar</Text>
        <Text style={styles.ing7}>2 tablespoons all-purpose flour</Text>
        <Text style={styles.ing8}>1 teaspoon vanilla extract</Text>
        <Text style={styles.ing9}>4 large eggs</Text>
        <Text style={styles.ing10}>2 cups frozen blueberries, dry pack</Text>
        <Text style={styles.ing11}>⅓ cup blueberry jelly</Text>
        <View style={styles.line2}></View>
        <Text style={styles.instructions}>Instructions</Text>
        <Text style={styles.inst1}>1. Preheat the oven to 165 degrees C.</Text>
        <Text style={styles.inst2}>2. Mix graham crumbs, melted butter, and 2 tablespoons sugar in a bowl until well combined. Pat mixture into the bottom of a 9-inch springform pan.</Text>
        <Text style={styles.inst3}>3. Mash cream cheese in a mixing bowl until soft and creamy. Gradually beat in sour cream, 3/4 cup sugar, flour, and vanilla. Beat in eggs, one at a time. Pour mixture into the crumb-lined pan.</Text>
        <Text style={styles.inst4}>4. Bake in the preheated oven until firm to the touch, about 1 hour.</Text>
        <Text style={styles.inst5}>5. Place baked cheesecake in the refrigerator until thoroughly chilled, about 4 hours.</Text>
        <Text style={styles.inst6}>6. Remove cheesecake from the pan by loosening the edges with a knife and opening the springform latch.</Text>
        <Text style={styles.inst7}>7. Transfer to a serving platter. Place frozen blueberries on top. Melt jelly in a saucepan over low heat; spoon over blueberries to glaze.</Text>
        <Text style={styles.inst8}>8. Chill in the refrigerator until ready to serve.</Text>
      </View>
    </ScrollView>
  );
};

export default Rec;