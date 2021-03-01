import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      }else{
        dispatch(logout());
      }
    });
  }, [])

  return (
    <div className="App">
      {user ? (
        <HomePage />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
