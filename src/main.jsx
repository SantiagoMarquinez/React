import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Box, ChakraProvider } from "@chakra-ui/react";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCaD51Jul7jzShg29RRdcgg-CYhZ7APgrc",
//     authDomain: "cuervo-store.firebaseapp.com",
//     projectId: "cuervo-store",
//     storageBucket: "cuervo-store.appspot.com",
//     messagingSenderId: "755361279321",
//     appId: "1:755361279321:web:432a6c6ca937c7d60df048",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <ChakraProvider>
            <Box backgroundColor="#483D8B">
            <App />
            </Box>
        </ChakraProvider>
    </>
);
