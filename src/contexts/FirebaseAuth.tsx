import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  UserCredential as IUserCredential,
} from 'firebase/auth';
import { User } from '../types';

interface IContext {
  user: User | null;
  isLoggedIn: boolean;
  logInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<IUserCredential | null>;
  logOut(): Promise<void>;
}

const initialContext: IContext = {
  user: null,
  isLoggedIn: false,
  logInWithEmailAndPassword: () => Promise.resolve(null),
  logOut: () => Promise.resolve(),
};

const FirebaseAuthContext = createContext<IContext>(initialContext);

const FirebaseAuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const auth = useMemo(() => getAuth(), []);
  const isLoggedIn = useMemo(() => !!authUser, [authUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(state =>
          state?.id === user.uid
            ? state
            : {
                id: user.uid,
                displayName: user.displayName,
                email: user.email,
              },
        );
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  const logInWithEmailAndPassword = useCallback(
    async (email: string, password: string) =>
      signInWithEmailAndPassword(auth, email, password),
    [auth],
  );

  const logOut = useCallback(async () => {
    signOut(auth);
  }, [auth]);

  const context = useMemo(
    () => ({
      user: authUser,
      isLoggedIn,
      logInWithEmailAndPassword,
      logOut,
    }),
    [authUser, isLoggedIn, logInWithEmailAndPassword, logOut],
  );

  return (
    <FirebaseAuthContext.Provider value={context}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export default FirebaseAuthProvider;
