import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  return (
      <>
      <StatusBar barStyle="dark-content" backgroundColor="#8B10AE"/>
      <Routes />
      </>
  );
}
