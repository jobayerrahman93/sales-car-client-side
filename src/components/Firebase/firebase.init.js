import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthtication=()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthtication;