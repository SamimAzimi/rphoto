import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDigf9zE3uAfXpUGzRdqH8S3NuwsRltItM",
  authDomain: "rphoto-2d5ee.firebaseapp.com",
  databaseURL: "https://rphoto-2d5ee-default-rtdb.firebaseio.com",
  projectId: "rphoto-2d5ee",
  storageBucket: "rphoto-2d5ee.appspot.com",
  messagingSenderId: "259199097654",
  appId: "1:259199097654:web:2fc72eade9d9fb523d3197",
  measurementId: "G-81HWG03BCY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const ProjectStorage = firebase.storage();
// const ProjectFirestore = firebase.firestore();
// const fireDB = firebase.database();
// const firebaseauth = firebase.auth();
// const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
// export { ProjectStorage, ProjectFirestore, timeStamp, firebaseauth, firebase };

export default firebase;
