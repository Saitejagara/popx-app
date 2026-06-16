import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('welcome');
  const [userData, setUserData] = useState({ fullName: '', email: '', phone: '', company: '', agency: 'yes' });

  const navigate = (screenName) => setScreen(screenName);

  const saveUser = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <AppContext.Provider value={{ screen, navigate, userData, saveUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
