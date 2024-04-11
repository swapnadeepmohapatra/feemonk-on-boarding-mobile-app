/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
      }}>
      <WebView
        source={{uri: 'https://feemonk-on-boarding.vercel.app/'}}
        style={{
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
}

export default App;
