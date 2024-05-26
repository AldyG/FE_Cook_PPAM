import firestore from "@react-native-firebase/firestore"

// interface prop {
// }

const dataPoint = (collectionPath: string) => 
  firestore()
  .collection(collectionPath)

const db = {
  user: dataPoint('users'),
  recipes: dataPoint('recipes'),
  profile: dataPoint('profile'),
  payment: dataPoint('payment')
}

export { db }
export default db