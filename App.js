import React from 'react';
import Task from './src/screens/task';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants/Constants';
const App = () => {


  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}/>
      <Task />
    </>
  );
}

export default App;
