import { useState, useEffect, useMemo } from 'react';
import { Firebase } from '../services';
// import { useNavigation, useRoute } from '@react-navigation/native';
import { User } from '../types';

const useAuthentication = () => {
  const [authUser, setAuthUser] = useState<User>();
  const firebase = useMemo(() => new Firebase(), []);
  const isLoggedIn = useMemo(() => !!authUser, [authUser]);

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(user => {
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
  }, [firebase]);

  // const logout = useCallback(() => {
  //   firebase.signOut();
  // }, [firebase]);

  // const loginWithCredential = useCallback(
  //   async (email: string, password: string) => {
  //     try {
  //       await firebase.signInWithEmailAndPassword(email, password);
  //     } catch (error) {
  //       throw new Error('Invalid credentials');
  //     }
  //   },
  //   [firebase],
  // );

  return {
    isLoggedIn,
    user: authUser,
  };
};

export default useAuthentication;
