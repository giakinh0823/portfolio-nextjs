import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { firebaseConfig } from "../constants";

initializeApp(firebaseConfig);

const storage = getStorage();

export async function uploadImage(image: any) {
  const id = uuidv4();
  const storageRef = ref(storage, `blogs/${id}`);
  const metadata = {
    contentType: image.type,
  };
  const uploadTask = await uploadBytes(storageRef, image, metadata);
  const url = await getDownloadURL(uploadTask.ref);
  return url;
}
