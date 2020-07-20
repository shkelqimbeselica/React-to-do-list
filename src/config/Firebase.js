import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDo2iUVv-ehy3WDXF0RvF8nc6M609Zocgc",
  authDomain: "to-do-list-a3c93.firebaseapp.com",
  databaseURL: "https://to-do-list-a3c93.firebaseio.com",
  projectId: "to-do-list-a3c93",
  storageBucket: "to-do-list-a3c93.appspot.com",
  messagingSenderId: "254079278859",
  appId: "1:254079278859:web:b9b87f29a313664914cc0e",
  measurementId: "G-VSXCPTWDNZ",
};
const fire = firebase.initializeApp(config);
export default fire;
