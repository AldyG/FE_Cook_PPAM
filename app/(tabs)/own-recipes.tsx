import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

const styles = StyleSheet.create({
	yourrecipebg: {
    backgroundColor: "#edf9ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  yourrecipe1: {
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
  post_recipe: {
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
    height: 151,
    left: 55,
    position: "absolute",
    top: 90,
    width: 320,
  },
  recipe_box_label: {
    color: "#080738",
    fontFamily: "DMSans_400Regular",
    fontSize: 20,
    left: 30,
    top: 55,
    position: "absolute",
    width: 200
  },
  add_button: {
    height: 30,
    left: 270,
    position: "absolute",
    top: 55,
    width: 30
  },
  your_recipes: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    left: 40,
    lineHeight: 24,
    position: "absolute",
    width: 211,
    top: 260
  },
  sushibox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    height: 234,
    left: 42,
    position: "absolute",
    top: 300,
    width: 343,
  },
  onigiribox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    height: 234,
    left: 42,
    position: "absolute",
    top: 570,
    width: 343,
  },
  muntahubox: {
    backgroundColor: "#ffffff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#87e4fd",
    height: 234,
    left: 42,
    position: "absolute",
    top: 840,
    width: 343,
  },
  boxpic: {
    height: 166,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
    objectFit: "cover"
  },
  recipetext: {
    color: "#080738",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    left: 15,
    top: 175,
    position: "absolute",
  },
  cheftext: {
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
})

const Own: React.FC<prop> = () => {
  return (
    <ScrollView contentContainerStyle={styles.yourrecipebg}>
      <View style={styles.yourrecipe1}>
        <View style={styles.boxrectangle}>
          <Text style={styles.post_recipe}>Post your Recipes</Text>
          <Image style= {styles.backarrow} source={require("../../images/backarrow2.png")}/>
        </View>
        <View style={styles.add_recipe_box}>
          <Text style={styles.recipe_box_label}>Add new recipe</Text>
          <Image style= {styles.add_button} source={require("../../images/add_plus_circle.png")}/>
        </View>
        <Text style={styles.your_recipes}>Your Recipes (3)</Text>
        <View style={styles.sushibox}>
          <Image style={styles.boxpic} source={require("../../images/sushi.png")} alt="sushi"/>
          <Text style={styles.recipetext}>Homemade Sushi</Text>
          <Text style={styles.cheftext}>By UserWOW!BRAVO!</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>3.8</Text>
          </View>
        </View>
        <View style={styles.onigiribox}>
          <Image style={styles.boxpic} source={require("../../images/onigiri.png")} alt="sushi"/>
          <Text style={styles.recipetext}>Easy Onigiri</Text>
          <Text style={styles.cheftext}>By UserWOW!BRAVO!</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>4.0</Text>
          </View>
        </View>
        <View style={styles.muntahubox}>
          <Image style={styles.boxpic} source={require("../../images/muntahu.png")} alt="sushi"/>
          <Text style={styles.recipetext}>Mun Tahu</Text>
          <Text style={styles.cheftext}>By UserWOW!BRAVO!</Text>
          <View style={styles.ratebox}>
            <Text style={styles.rating}>4.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Own;