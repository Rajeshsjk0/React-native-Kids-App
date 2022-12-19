import React, {useEffect} from 'react';

import {ImageBackground, StyleSheet, View} from 'react-native';
import Button from './../components/UI/Button';
import {useNavigation} from '@react-navigation/native';
import Sound from 'react-native-sound';

const StartScreen = ({navigation}) => {
  useEffect(() => {
    /*     const isFocused = navigation.isFocused();

    console.log(isFocused);   */

    var sound1 = new Sound(
      require('./../assets/audios/start.mp3'),
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      },
    );

    var didBlurSubscription = navigation.addListener('blur', () =>
      sound1.pause(),
    );
    var FocusSubscription = navigation.addListener('focus', () =>
      sound1.play(),
    );

    return () => {
      sound1.stop(() => {
        console.log('Stop');
      });
    };
  }, [navigation]);

  function onPressHandler() {
    console.log('Pressed - Start Screen');
    navigation.navigate('IntroScreen');
  }
  const localImage = require('./../assets/images/background.jpg');
  return (
    <ImageBackground source={localImage} style={styles.background}>
      <Button onPress={onPressHandler} style={styles.button}>
        Start
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    minWidth: 120,
    width: 50,
    marginHorizontal: 8,
  },
});

export default StartScreen;
