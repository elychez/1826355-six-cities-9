import MainScreen from '../main-screen/main-screen';
import React from 'react';

type AppScreenProps = {
  rentCount: number;
}

function App({rentCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen rentCount={rentCount}/>
  );
}

export default App;
