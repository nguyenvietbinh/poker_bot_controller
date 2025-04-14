import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: process.env.DATABASE_APIKEY,
  authDomain: "my-database-project-39c8e.firebaseapp.com",
  databaseURL: "https://my-database-project-39c8e-default-rtdb.firebaseio.com",
  projectId: "my-database-project-39c8e",
  storageBucket: "my-database-project-39c8e.firebasestorage.app",
  messagingSenderId: "349715195628",
  appId: "1:349715195628:web:00d798404d7eddbaa427c9",
  measurementId: "G-XT0B6J960N"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);