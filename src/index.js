import React  from 'react';
 import { StatusBar, YellowBox } from 'react-native';
// import store from './store';
import Routes from './routes';


// Suppress warnings triggered by react-navigation and other libraries.
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
// ]);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;


