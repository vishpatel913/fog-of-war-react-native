import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { User } from '../types';
import FirebaseAuthContext from './FirebaseAuthContext';

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

export default FirebaseAuthProvider;
