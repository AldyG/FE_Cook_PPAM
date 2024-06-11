import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { Link } from 'expo-router'
import { DMSans_700Bold, DMSans_400Regular, useFonts} from "@expo-google-fonts/dm-sans";
import { Redirect } from 'expo-router';

interface prop {
  // prop halaman
}

export default function Pay() {
  const [cardType, setCardType] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [secCode, setSecCode] = useState<string>("");
  const styles = StyleSheet.create({
    paymentbg: {
      backgroundColor: "#edf9ff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    payment1: {
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
    carddetail_header: {
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
    leftlabel: {
      color: "#1a1a1a",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      left: 45,
      top: 60,
      lineHeight: 70,
      position: "absolute",
    },
    cardtypetext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 117,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    cardnumbertext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 195,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    namecardtext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 271,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    startdatetext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 349,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    expirydatetext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 425,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    securitycodetext: {
      color: "#080738",
      fontFamily: "DMSans_400Regular",
      fontSize: 14,
      height: 40,
      left: 40,
      position: "absolute",
      top: 502,
      width: 350,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: "#87e4fd",
      backgroundColor: "#ffffff",
      padding: 10,
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.paymentbg}>
      <View style={styles.payment1}>
        <Link style={styles.boxrectangle} href={"/(tabs)/profiling/upgrade"} asChild push>
          <Pressable>
            <Text style={styles.carddetail_header}>Card Details</Text>
            <Image style= {styles.backarrow} source={require("../../../images/backarrow2.png")}/>
          </Pressable>
        </Link>
        <Text style={styles.leftlabel}>Type of Card:{"\n"}Card Number:{"\n"}Name on Card:{"\n"}Start Date:{"\n"}Expiry Date:{"\n"}Security Code:</Text>
        <TextInput style={styles.cardtypetext} onChangeText={(cardType) => setCardType(cardType)}
          value={cardType} placeholder="Enter card type"/>
        <TextInput style={styles.cardnumbertext} onChangeText={(cardNumber) => setCardNumber(cardNumber)}
          value={cardNumber} placeholder="Enter card number"/>
        <TextInput style={styles.namecardtext} onChangeText={(cardName) => setCardName(cardName)}
          value={cardName} placeholder="Enter name on card"/>
        <TextInput style={styles.startdatetext} onChangeText={(startDate) => setStartDate(startDate)}
          value={startDate} placeholder="Enter start date"/>
        <TextInput style={styles.expirydatetext} onChangeText={(endDate) => setEndDate(endDate)}
          value={endDate} placeholder="Enter expiry date"/>
        <TextInput style={styles.securitycodetext} onChangeText={(secCode) => setSecCode(secCode)}
          value={secCode} placeholder="Enter security code"/>
      </View>
    </ScrollView>
  );
};
