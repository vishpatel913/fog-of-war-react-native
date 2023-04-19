import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { FirebaseAuth } from '../services';
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
  const auth = useMemo(() => new FirebaseAuth(), []);
  const isLoggedIn = useMemo(() => !!authUser, [authUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
