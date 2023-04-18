import { createContext, useContext } from 'react';
import { UserCredential } from 'firebase/auth';
import { User } from '../types';

interface IContext {
  user: User | null;
  isLoggedIn: boolean;
  logInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserCredential | null>;
  logOut(): Promise<void>;
}

const initialContext: IContext = {
  user: null,
  isLoggedIn: false,
  logInWithEmailAndPassword: () => Promise.resolve(null),
  logOut: () => Promise.resolve(),
};

const FirebaseAuthContext = createContext<IContext>(initialContext);

export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export default FirebaseAuthContext;
