import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Loading Fonts e Api
import AppLoading from 'expo-app-loading'
import {useFonts , BalsamiqSans_400Regular , BalsamiqSans_700Bold , BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
//
export default function App() {

  const FontsLoading = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic
  });

  if(!FontsLoading){
    return <AppLoading/>
  }

  return (
    <>

      <StatusBar style="auto" />

    </>
  );
}
