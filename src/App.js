import React, { useState } from "react";
import { Header, Input, ToDos, Softkey } from "./components";
import { useNavigation } from "./hooks";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore/lite';

export default function App() {
	// Your web app's Firebase configuration
	const firebaseConfig = {
	  apiKey: "AIzaSyBEvvdbPzE-MHBNXhs64khBUIH2ZFL5iYA",
	  authDomain: "traveller-ad8e4.firebaseapp.com",
	  projectId: "traveller-ad8e4",
	  storageBucket: "traveller-ad8e4.appspot.com",
	  messagingSenderId: "676434108843",
	  appId: "1:676434108843:web:3e04bc87b2d84742e732ee"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);


  const [toDos, setToDo] = useState([]);
  
  let length;
  async function getNotes() {
  	const notesCol = collection(db, 'notes');
  	const notesSnapshot = await getDocs(notesCol);
  	const notesList = notesSnapshot.docs.map(doc => doc.data());
  	setToDo(notesList);
  	length = notesList.length;
  }
  async function setNotes(name) {
  	let safe_name = name.replace(/\//g,"|");
  	await setDoc(doc(db, "notes",safe_name), {
  		name: name
	});
  }
   
  const [current, setNavigation] = useNavigation();

  const onKeyLeft = () => {
     getNotes(db);
  };
  
  const onKeyCenter = () => {
    const currentElement = document.querySelector("[nav-selected=true]");
    const currentNavigationIndex = parseInt(currentElement.getAttribute("nav-index"), 10);

    if (currentElement.value.length) {
      setNotes(""+currentElement.value);
      currentElement.value = "";
    }
     };

  const onKeyRight = () => {
    const currentElement = document.querySelector("[nav-selected=true]");
    const currentIndex = parseInt(
      currentElement.getAttribute("nav-index"),
      10
    );   
    if (currentIndex > 0) {
      deleteDoc(doc(db, "notes", ""+currentElement.innerHTML.replace(/\//g,"|")));
    }
  };
  
  return (
    <>
      <Header title="Traveller" />

      <Input type="text" label="+" />
      <ToDos toDos={toDos} />

      <Softkey
        left={"CONNECT"}
        onKeyLeft={onKeyLeft}
        center={"ADD"}
        onKeyCenter={onKeyCenter}
        right={current.type === "SPAN" ? "DELETE" : ""}
        onKeyRight={onKeyRight}
      />
    </>
  );
}
