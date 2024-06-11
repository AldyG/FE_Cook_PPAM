import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from "react-native";
import { Link, router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { db } from '@/FirebaseConfig';
import { DocumentData, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

interface prop {
}

const styles = StyleSheet.create({
	browsingbg: {
        backgroundColor: "#edf9ff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
	recipebrowsing1: {
		backgroundColor: "#edf9ff",
		height: 932,
		position: "relative",
		width: 430,
	},
	searchman: {
		height: 461,
		left: 53,
		objectFit: "cover",
		position: "absolute",
		top: 200,
		width: 337,
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
	navbarbox: {
		backgroundColor: "#ffffff",
		height: 63,
		left: 0,
		position: "absolute",
		top: 870,
		width: 430
	},
  	examplefish: {
    	fontFamily: "DMSans_400Regular",
    	fontSize: 16,
    	color: "#606060",
    	left: 70,
    	position: "absolute",
    	top: 16,
    	width: 159
  	},
	backarrow: {
		height: 22,
		left: 35,
		position: "absolute",
		top: 16,
		width: 20
	},
	homeicon: {
		height: 25,
		left: 55,
		position: "absolute",
		top: 890,
		width: 25
	},
	postrecipeicon: {
		height: 25,
		left: 160,
		position: "absolute",
		top: 890,
		width: 25
	},
	collectionicon: {
		height: 25,
		left: 260,
		position: "absolute",
		top: 890,
		width: 25
	},
	profileicon: {
		height: 25,
		left: 355,
		position: "absolute",
		top: 890,
		width: 25
	},
	Recipecollection: {
		height: 48,
		width: 234,
		color: "#080738",
		fontFamily: "DMSans_700Bold",
		fontSize: 20,
		left: 125,
		top: 70,
		position: "absolute"
	  },
	  beeflasagnabox: {
		backgroundColor: "#ffffff",
		borderRadius: 17,
		borderWidth: 0.5,
		borderColor: "#1a1a1a",
		height: 234,
		left: 21,
		position: "absolute",
		top: 120,
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

function Search() {
	const params = useLocalSearchParams<{ q?: string }>();
	const [search, setSearch] = React.useState("Timun Ala Carte");
	const a = [] as DocumentData;
	const b = [] as DocumentData;
	const [curr, setCurr] = React.useState(a);
	const [rev, setRev] = React.useState(b);

	// async function recipes() {
	// 	var recipe: DocumentData;
	// 	try{
	// 		recipe = await getDocs(query(collection(db, "recipes"), where("name", "==", "Timun Ala Carte")))
	// 		.then(q => {
	// 			if (q != null) {
	// 				const recipe = q.docs[0].data();
	// 				return recipe;
	// 			}
	// 			else {
	// 				return null;
	// 			}
	// 		});
	// 		setCurr([recipe]);
	// 	} catch(e) {
	// 		console.error("error: ", e);
	// 	}
	// }
	// async function reviews() {
	// 	var review: DocumentData;
	// 	try{
	// 		const docs = curr.reviewID;
	// 		review = await getDoc(doc(db, docs));
			
	// 	} catch(e) {
	// 		console.error("error: ", e);
	// 	}
	// 	setRev(review);
	// }

	// useEffect(() => {
	// 	recipes();
	// 	reviews();
	// }, []);
	
    if (search != ""){
        return (
            <ScrollView contentContainerStyle={styles.browsingbg}>
				<View style={styles.recipebrowsing1}>
					<View style={styles.boxrectangle}>
						<TextInput style={styles.examplefish} value={search} onChangeText={(search) => setSearch(search)} defaultValue={search} placeholder='Example: Fish' />
						<Pressable onPress={() => router.back()}>
							<Image style= {styles.backarrow} source={require("../../../images/backarrow.png")}/>
						</Pressable>
					</View>
					<Text style={styles.Recipecollection}>Search Results (1)</Text>
				</View>
				<Pressable style={styles.beeflasagnabox} onPress={() => router.push("./recipe")}>
					<Image style={styles.lasagnapic} source={require("../../../images/timun.jpg")} alt="lasagna"/>
					<Text style={styles.lasagnatext}>Timun Ala Carte</Text>
					<Text style={styles.bygarfield}>By Dummy123</Text>
					<View style={styles.ratebox}>
						<Text style={styles.rating}>5.0</Text>
					</View>
				</Pressable>
		</ScrollView>
	);} else {
        return (
            <ScrollView contentContainerStyle={styles.browsingbg}>
                <View style={styles.recipebrowsing1}>
                    <View style={styles.boxrectangle}>
                        <TextInput style={styles.examplefish} value={search} onChangeText={(search) => setSearch(search)} defaultValue={search} placeholder='Example: Fish' />
                        <Pressable onPress={() => router.back()}>
                            <Image style= {styles.backarrow} source={require("../../../images/backarrow.png")}/>
                        </Pressable>
                    </View>
                    <Image style={styles.searchman} source={require("../../../images/searchingman.png")} />
                </View>
            </ScrollView>
        );
    }
};

export default Search;