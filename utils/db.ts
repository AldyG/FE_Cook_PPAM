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

// async function getUser(e, pass) {
//   const user = db.user
//   .where(firestore.Filter.and(
//     firestore.Filter('email', '==', e), 
//     firestore.Filter('password', '==', crypt.digest(crypt.CryptoDigestAlgorithm.MD5, pass))
//   ))
//   .get();

//   return user;
// }

export { db }
export default db