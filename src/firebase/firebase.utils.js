import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA9okdugKzG32t96ypeKMlDtpOjv1pT9nM',
  authDomain: 'backend-evernote.firebaseapp.com',
  projectId: 'backend-evernote',
  storageBucket: 'backend-evernote.appspot.com',
  messagingSenderId: '287269169321',
  appId: '1:287269169321:web:2ce808b84b5782d57861b8',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
