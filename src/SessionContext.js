import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up a listener for auth changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  // Function to handle user logout
  const logout = async () => {
    try {
      await signOut(auth);
      // The user state will be updated by the auth state change listener
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  const value = {
    session: user ? { user } : null, // Keep compatibility with existing code
    user,
    logout,
    isLoading: loading
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
