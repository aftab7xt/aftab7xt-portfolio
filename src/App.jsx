import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <HomeScreen />
      <Analytics />
    </>
  );
}

export default App;
