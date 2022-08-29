// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCo4gTzNPToyevrCUOSCjtihOV7vhtdKFA",
    authDomain: "wherenext-f4d23.firebaseapp.com",
    projectId: "wherenext-f4d23",
    storageBucket: "wherenext-f4d23.appspot.com",
    messagingSenderId: "586336764016",
    appId: "1:586336764016:web:d39aca3232607633d374b5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
/* 
STEP 01 - Set up your provider and pass it custom parameters
provider can be anything
Google/Github/Facebook
*/
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
})

/* 
STEP 02 - Export Auth and SigninWithPopup
*/

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


/* 
STEP 03 - Set up your firebase
*/

export const db = getFirestore();
export const createUserDocFromAuth = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);



    const userSnapshot = await getDoc(userDocRef);

    // if user data doesnt exists 
    //create/setDocument with data from userAuth in my collection
 
    if(!userSnapshot.exists()) {
        const {displayName, email} = user;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } 
        catch (error){
            console.log("error creating the user" , error);
        }
    };

    // if user data exists do noting and return userDocReference
    return  userDocRef
}