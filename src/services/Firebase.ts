import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  Auth as IAuth,
  User as IUser,
  NextOrObserver as TNextOrObserver,
  CompleteFn as TCompleteFn,
  ErrorFn as TErrorFn,
} from 'firebase/auth';

class Firebase {
  auth: IAuth;

  constructor() {
    this.auth = getAuth();
  }

  onAuthStateChanged(
    nextOrObserver: TNextOrObserver<IUser>,
    error?: TErrorFn,
    completed?: TCompleteFn,
  ) {
    return onAuthStateChanged(this.auth, nextOrObserver, error, completed);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut() {
    return signOut(this.auth);
  }
}

export default Firebase;
