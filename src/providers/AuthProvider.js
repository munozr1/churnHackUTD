import * as React from "react";



const app = initializeApp(firebaseConfig);
const auth = getAuth();
// create context
const AuthStateContext = React.createContext()

const AuthStateProvider = ({ children }) => {
  // the value that will be given to the context
  const [$authState, $setAuthState] = React.useState({ Authenticated: false });
  const [verificationId, setVerificationId] = React.useState();

  const googleProvider = new GoogleAuthProvider(auth);
  const signInWithGoogle = async () => {

  }

  const registerEmailAndPassword = (user) => {

  }

  const signInWithEmail = (email, password) => {

  }

  const logOut = () => {

  }




  return (
    // the Provider gives access to the context to its children
    <AuthStateContext.Provider
      value={{
        $authState,
        $setAuthState,
        signInWithGoogle,
        signInWithEmail,
        registerEmailAndPassword,
        logOut,
      }}>

      {children}
    </AuthStateContext.Provider>
  );
};

export { AuthStateContext, AuthStateProvider};
