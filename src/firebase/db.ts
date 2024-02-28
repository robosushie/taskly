import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "./auth";

const db = getFirestore(app);

const readDocument = async (user: string): Promise<any> => {
  try {
    const querySnapshot = await getDocs(collection(db, user));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;
  } catch (error: any) {
    console.log({ error: error.message });
    throw error;
  }
};

const writeDocument = async (user: string, task: any) => {
  try {
    const docRef = await addDoc(collection(db, user), task);
    return docRef.id;
  } catch (error: any) {
    console.log({ error: error.message });
    throw error;
  }
};

const updateDocument = async (
  user: string,
  doc_id: string,
  task: any
): Promise<void> => {
  try {
    await updateDoc(doc(db, user, doc_id), task);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

const removeDocument = async (user: string, doc_id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, user, doc_id));
  } catch (error) {
    console.error("Error removing document:", error);
    throw error;
  }
};

export { db, readDocument, writeDocument, updateDocument, removeDocument };
