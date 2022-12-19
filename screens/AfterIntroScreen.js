import React, {useEffect, useState} from 'react';
import Rive, {RiveRef} from 'rive-react-native';
import Sound from 'react-native-sound';

import {StyleSheet, View, Button, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AfterIntroScreen = ({navigation}) => {
  useEffect(() => {
    var sound1 = new Sound(
      require('./../assets/audios/afterintro.mp3'),
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

  const riveRef = React.useRef(null);

  function onPressHandler() {
    console.log('Go to Dog Play Screen');
    navigation.navigate('DogPlayScreen');
  }

  const resourceName = 'afterintro';

  setTimeout(() => {}, 5000);

  return (
    <View style={styles.container}>
      <View>
        <Rive
          ref={riveRef}
          resourceName={resourceName}
          fit={((FitWidth = 'fitWidth'), (FitHeight = 'fitHeight'))}
          style={{width: windowWidth, height: windowHeight}}
          autoplay={true}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={onPressHandler} title="play" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000000',
  },
  button: {
    position: 'absolute',
    bottom: '50%',
    right: '40%',
    opacity: 0,
  },
});

export default AfterIntroScreen;
