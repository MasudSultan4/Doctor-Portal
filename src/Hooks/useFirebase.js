import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] = useState(false)
    const [token,setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register email and password 
    const registerUser = (email, password, name, history,location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                sendDataServer(email,name,'POST')

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    // login email and password 
    const logIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // sing is with goolge 
    const singInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                sendDataServer(user.email,user.displayName,'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() =>{
        fetch(`http://localhost:4000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    // observer user state 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken =>{
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    // logout any
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const sendDataServer = (email,displayName,method) =>{
        const user= {email,displayName} 
        fetch('http://localhost:4000/users',{
            method:method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        logIn,
        logOut,
        authError,
        singInWithGoogle
    }
}

export default useFirebase