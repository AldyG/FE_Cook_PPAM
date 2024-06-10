import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

export default function Add() {
  const [recipeName, setRecipeName] = useState<string>("");
  const [recipeDescription, setRecipeDescription] = useState<string>("");
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
      height: 1800,
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
      fontFamily: "DMSans_400Regular",
      borderColor: "#87e4fd",
      borderWidth: 0.5,
      borderRadius: 17,
      height: 41,
      left: 45,
      paddingLeft: 10,
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
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      textAlignVertical: "top",
      overflow: "hidden",
      fontFamily: "DMSans_400Regular",
      left: 45,
      position: "absolute",
      top: 460,
      width: 350,
    },
    ingredients: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 18,
      left: 45,
      top: 520,
      lineHeight: 24,
      width: 211
    },
    ingredients_box: {
      backgroundColor: "#ffffff",
      borderColor: "#87e4fd",
      borderWidth: 0.5,
      borderRadius: 17,
      height: 254,
      left: 45,
      position: "absolute",
      top: 620,
      width: 340,
    },
    add_ingredient_box: {
      backgroundColor: "#ffffff",
      borderWidth: 1,
      borderRadius: 12,
      borderColor: "#080738",
      height: 31,
      left: 10,
      top: 10,
      position: "absolute",
      width: 320
    },
    add_ingredient_text: {
      color: "#909090",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      left: 5,
      top: 0,
      lineHeight: 24,
      position: "absolute",
      width: 192
    }
  });
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
          <TextInput style={styles.recipe_name_box} onChangeText={(recipeName) => setRecipeName(recipeName)}
            value={recipeName} placeholder="Enter recipe name"/>
          <Text style={styles.recipe_description}>Recipe Description</Text>
          <TextInput
            style={styles.recipe_description_box}
            onChangeText={(recipeDescription) => setRecipeDescription(recipeDescription)}
            value={recipeDescription}
            placeholder="Enter the description"
            multiline={true}
            numberOfLines={4}
            />
          <Text style={styles.ingredients}>Ingredients</Text>
          <View style={styles.ingredients_box}>
            <View style={styles.add_ingredient_box}>
              <Text style={styles.add_ingredient_text}> + Add ingredient</Text>
            </View>
          </View>
        </View>
    </ScrollView>
    );
}