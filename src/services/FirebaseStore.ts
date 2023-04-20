import { doc, getFirestore, Firestore as IFirestore } from 'firebase/firestore';
import { User } from '../types';

enum StoreKeys {
  USERS = 'users',
}

type StoreData = {
  [StoreKeys.USERS]: User;
};

class FirebaseStore {
  database: IFirestore;

  constructor() {
    this.database = getFirestore();
  }

  getDocumentRef(collectionKey: string, ...path: string[]) {
    return doc(this.database, collectionKey, ...path);
  }

  // async addDocument() {}
}

export default FirebaseStore;
