import { useState } from "react";   // ✅ Add this import
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <NavBar />
          <LandingPage />
        </>
      )}
    </>
  );
}

export default App;
