import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import { useNavigation, useRoute } from '@react-navigation/native';
import { User } from '../types';

const useAuthentication = () => {
  const [authUser, setAuthUser] = useState<User>();
  const auth = getAuth();
  const isLoggedIn = useMemo(() => !!authUser, [authUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('onAuthStateChanged', user);
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
        setAuthUser(undefined);
      }
    });

    return unsubscribe;
  }, [auth]);

  const logout = useCallback(() => {
    signOut(auth);
  }, [auth]);

  const loginWithCredential = useCallback(
    async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        throw new Error('Invalid credentials');
      }
    },
    [auth],
  );

  return {
    isLoggedIn,
    user: authUser,
    loginWithCredential,
    logout,
  };
};

export default useAuthentication;
