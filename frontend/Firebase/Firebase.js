import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database'

const firebaseConfig={
    apiKey: "AIzaSyDzPvPNffmQ_36G89lxklzz650_PEOAVAk",
  authDomain: "skin-disease-62716.firebaseapp.com",
  projectId: "skin-disease-62716",
  storageBucket: "skin-disease-62716.appspot.com",
  messagingSenderId: "571685001385",
  appId: "1:571685001385:web:d09fdf030570cf92e871b8"
}

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
