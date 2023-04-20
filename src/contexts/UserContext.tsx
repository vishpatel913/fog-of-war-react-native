import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { FirebaseAuth, FirebaseStore } from '../services';
import { User } from '../types';

interface IContext {
  user: User | null;
  isLoggedIn: boolean;
}

const initialContext: IContext = {
  user: null,
  isLoggedIn: false,
};

const UserContext = createContext<IContext>(initialContext);

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const isLoggedIn = useMemo(() => !!authUser, [authUser]);

  useEffect(() => {
    const auth = new FirebaseAuth();
    const store = new FirebaseStore();
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userDocument = await store.getDocument('users', user.uid);
        const nextUser = {
          id: user.uid,
          displayName: userDocument?.displayName || user.displayName,
          email: userDocument?.email || user.email,
          photoURL: userDocument?.photoURL || user.photoURL,
        };
        setAuthUser(state => (state?.id === user.uid ? state : nextUser));
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const context = useMemo(
    () => ({
      user: authUser,
      isLoggedIn,
    }),
    [authUser, isLoggedIn],
  );

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
