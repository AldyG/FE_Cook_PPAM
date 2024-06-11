import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput, PixelRatio } from "react-native";
import { Link, router } from 'expo-router';
import { useEffect, useState } from "react";
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';


export default function Change() {
  const pixel_ratio = PixelRatio.get();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [bioDesc, setBioDesc] = useState<string>("");
  const styles = StyleSheet.create({
    changebg: {
      backgroundColor: "#edf9ff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    change_base: {
      backgroundColor: "#edf9ff",
      height: 900,
      position: "relative",
      width: 430,
    },
    change_profile_header: {
      fontFamily: "DMSans_700Bold",
      fontSize: 20,
      color: "#080738",
      width: 200,
      left: (270 / pixel_ratio),
      top: 10
    },
    user_logo: {
      height: 124,
      resizeMode: "contain",
      left: 30,
      position: "relative",
      top: 118,
    },
    profile_username: {
      fontFamily: "DMSans_700Bold",
      fontSize: 20,
      color: "#080738",
      width: 230,
      left: (320 / pixel_ratio),
      top: 0
    },
    profile_name: {
      fontFamily: "DMSans_400Regular",
      fontSize: 16,
      color: "#080738",
      width: 247,
      left: (320 / pixel_ratio),
      top: 5
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
    backarrow: {
      height: 20,
      left: 35,
      position: "absolute",
      top: 16,
      width: 20
    },
    identity_box: {
      height: 124,
      left: (17 / pixel_ratio),
      position: "absolute",
      top: -30,
      width: 430,
    },
    save: {
      bottom: 74,
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: 13,
      borderColor: "#87e4fd",
      borderWidth: 0.5,
      display: "flex",
      height: 33,
      padding: 8,
      left: 168,
      top: 12,
      justifyContent: "center",
      width: 112,
    },
    save_text: {
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      color: "#080738",
      textAlign: "center",
      top: -1,
    },
    firstname: {
      color: "#080738",
      fontFamily: "DMSans_700Bold",
      fontSize: 18,
      height: 100,
      left: 45,
      position: "absolute",
      top: 240,
      width: 192,
    },
    lastname: {
      color: "#080738",
      fontFamily: "DMSans_700Bold",
      fontSize: 18,
      height: 100,
      left: 45,
      position: "absolute",
      top: 330,
      width: 192,
    },
    biography: {
      color: "#080738",
      fontFamily: "DMSans_700Bold",
      fontSize: 18,
      height: 100,
      left: 45,
      position: "absolute",
      top: 420,
      width: 192,
    },
    pencil1: {
      height: 18,
      left: 160,
      position: "absolute",
      top: 245,
      width: 18
    },
    pencil2: {
      height: 18,
      left: 160,
      position: "absolute",
      top: 335,
      width: 18
    },
    pencil3: {
      height: 18,
      left: 160,
      position: "absolute",
      top: 425,
      width: 18
    },
    first_name_text: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 280,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    last_name_text: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 370,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    bio_text: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 100,
      left: 40,
      position: "absolute",
      top: 460,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
      textAlignVertical: "top"
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.changebg}>
      <View style={styles.change_base}>
        <Link style={styles.boxrectangle} href={"/(tabs)/profile"} asChild push>
          <Pressable>
            <Text style={styles.change_profile_header}>Change Profile</Text>
            <Image style= {styles.backarrow} source={require("../../../images/backarrow2.png")}/>
          </Pressable>
        </Link>
        <View style={styles.identity_box}>
					<Image style={styles.user_logo} source={require("../../../images/user_circle.png")}/>
					<Text style={styles.profile_username}>UserWOW!BRAVO!</Text>
					<Text style={styles.profile_name}>Mellstroy_Impostor</Text>
          <Pressable onPress={() => router.push("../profile")}>
            <View style={styles.save}>
              <Text style={styles.save_text}>Save Profile</Text>
            </View>
          </Pressable>
				</View>
        <Text style={styles.firstname}>First Name</Text>
        <Image style={styles.pencil1} source={require("../../../images/pencilicon.png")}/>
        <TextInput style={styles.first_name_text} onChangeText={(firstName) => setFirstName(firstName)}
            value={firstName} placeholder="Enter first name"/>
        <Text style={styles.lastname}>Last Name</Text>
        <Image style={styles.pencil2} source={require("../../../images/pencilicon.png")}/>
        <TextInput style={styles.last_name_text} onChangeText={(lastName) => setLastName(lastName)}
            value={lastName} placeholder="Enter last name"/>
        <Text style={styles.biography}>Biography</Text>
        <Image style={styles.pencil3} source={require("../../../images/pencilicon.png")}/>
        <TextInput
          style={styles.bio_text}
          onChangeText={(bioDesc) => setBioDesc(bioDesc)}
          value={bioDesc}
          placeholder="Enter biography"
          multiline={true}
          numberOfLines={4}
          />
      </View>
    </ScrollView>
  );
}