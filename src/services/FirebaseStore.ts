import {
  doc,
  getDoc,
  getFirestore,
  Firestore as IFirestore,
  setDoc,
} from 'firebase/firestore';
import { User } from '../types';

enum CollectionKey {
  USERS = 'users',
}

type StoreData = {
  [CollectionKey.USERS]: User;
};

type CollectionKeyArg = `${CollectionKey}`;

class FirebaseStore {
  database: IFirestore;

  constructor() {
    this.database = getFirestore();
  }

  getDocumentRef(key: CollectionKeyArg, ...path: string[]) {
    return doc(this.database, key, ...path);
  }

  async addDocument(
    key: CollectionKeyArg,
    payload: StoreData[CollectionKeyArg],
  ) {
    const docRef = this.getDocumentRef(key, payload.id);
    await setDoc(docRef, payload);
  }

  async getDocument<K extends CollectionKey>(key: `${K}`, id: string) {
    const docRef = this.getDocumentRef(key, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return docSnap.data() as StoreData[K];
  }
}

export default FirebaseStore;
