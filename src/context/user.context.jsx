import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocFromAuth} from "../utils/firebase/firebase.utils";
// the acutal value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    // signOutUser();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // If user signed out we store null
            // If user signed in we store the object
            if(user){
                createUserDocFromAuth(user);
                console.log(user)
            }
            setCurrentUser(user);
            console.log(user);
        });

        return unsubscribe;
    }, [])
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}