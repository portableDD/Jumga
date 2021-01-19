import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './config';

export const app = firebase.default.initializeApp(firebaseConfig);

export const auth = firebase.default.auth()