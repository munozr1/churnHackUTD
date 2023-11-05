import * as React from "react";
import { app } from './AuthProvider';
import {where,getDocs, query,getFirestore, collection,  addDoc, } from "firebase/firestore";


import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { emailTemplate } from "./emailtemplate";


const db = getFirestore(app);
const DBContext = React.createContext();
const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

const FirestoreProvider = ({ children }) => {
  const [docId, setDocId] = React.useState(null);
  const [property, setProperty] = React.useState({});

  /*


      DB FUNCTIONS FOR EVENTS

  */



  return (
    // the Provider gives access to the context to its children
    <DBContext.Provider
      value={{
        // export db functions
      }}>
      {children}
    </DBContext.Provider>
  );
};

export { DBContext, FirestoreProvider };
