import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBQYEwdqPyU4zvNHVx3KfgGV3wM6pzf-Ps",
    authDomain: "product-api-4bbac.firebaseapp.com",
    projectId: "product-api-4bbac",
    storageBucket: "product-api-4bbac.appspot.com",
    messagingSenderId: "486105279188",
    appId: "1:486105279188:web:ca7420f271f557e8976941"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)