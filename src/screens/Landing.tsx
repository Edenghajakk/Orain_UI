import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Local imports
import LandingHeader from '../components/headers/LandingHeader';
import LandingContent from '../components/contents/LandingContent';

const Landing = () => {

  const counter = useSelector((reducer: {
    landingReducer: { counter: number }
  }) => reducer.landingReducer.counter);

  const dispatch = useDispatch();

  const incrementCounter = useCallback(
    () => dispatch({ type: 'INCREMENT' }),
    [dispatch]
  );
  const decrementCounter = useCallback(
    () => dispatch({ type: 'DECREMENT' }),
    [dispatch]
  );

  return (
    <ImageBackground source={require('../assets/photos/LandingPageBackground.jpg')} style={landingStyle.container}>

      <LandingHeader />

      <LandingContent />

    </ImageBackground>
  );
};

const landingStyle = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain'
  }
})

export default Landing;
