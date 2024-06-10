import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}


const styles = StyleSheet.create({
	addrecipebg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  addrecipe1: {
		backgroundColor: "#edf9ff",
		height: 1160,
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
  add_recipe: {
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
  add_recipe_box: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 204,
    left: 55,
    position: "absolute",
    top: 90,
    width: 320,
  },
  add_button: {
    height: 30,
    left: 140,
    position: "absolute",
    top: 85,
    width: 30
  },
  recipe_name: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 45,
    top: 320,
    lineHeight: 24,
    width: 211
  },
  recipe_name_box: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 41,
    left: 45,
    position: "absolute",
    top: 360,
    width: 340,
  },
  recipe_description: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 45,
    top: 390,
    lineHeight: 24,
    width: 211
  },
  recipe_description_box: {
    backgroundColor: "#ffffff",
    borderColor: "#87e4fd",
    borderWidth: 0.5,
    borderRadius: 17,
    height: 100,
    left: 45,
    position: "absolute",
    top: 460,
    width: 340,
  },
  ingredients: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 18,
    left: 45,
    top: 600,
    lineHeight: 24,
    width: 211
  },
  ingredients_box: {

  }
});

const Add: React.FC<prop> = () => {
  return (
  <ScrollView contentContainerStyle={styles.addrecipebg}>
      <View style={styles.addrecipe1}>
        <View style={styles.boxrectangle}>
          <Text style={styles.add_recipe}>Add Recipe</Text>
          <Image style= {styles.backarrow} source={require("../../../images/backarrow2.png")}/>
        </View>
        <View style={styles.add_recipe_box}>
          <Image style= {styles.add_button} source={require("../../../images/add_plus_circle.png")}/>
        </View>
        <Text style={styles.recipe_name}>Recipe Name</Text>
        <View style={styles.recipe_name_box}></View>
        <Text style={styles.recipe_description}>Recipe Description</Text>
        <View style={styles.recipe_description_box}></View>
        <Text style={styles.ingredients}>Ingredients</Text>
      </View>
  </ScrollView>
  );
};
export default Add;