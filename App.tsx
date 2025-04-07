/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.tsx';

function App(): React.JSX.Element {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <HomeScreen />
            </SafeAreaView>
        </>
    );
}

export default App;
