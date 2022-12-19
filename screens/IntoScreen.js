import React, {useEffect} from 'react';
import Rive, {RiveRef} from 'rive-react-native';
import Sound from 'react-native-sound';

import {StyleSheet, View, Button, Dimensions} from 'react-native';

const IntroScreen = ({navigation}) => {
  useEffect(() => {
    var sound1 = new Sound(
      require('./../assets/audios/intro.mp3'),
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

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const riveRef = React.useRef(null);

  function onPressHandler() {
    console.log('Pressed on Skip Intro go to After Intro Screen');
    navigation.navigate('AfterIntroScreen');
  }

  function onStopHandler() {
    console.log('Animation has been completed go to After Intro Screen');
    navigation.navigate('AfterIntroScreen');
  }

  const resourceName = 'intro';
  return (
    <View style={styles.container}>
      <View>
        <Rive
          resourceName={resourceName}
          artboardName={'Scene'}
          fit={((FitWidth = 'fitWidth'), (FitHeight = 'fitHeight'))}
          style={{width: windowWidth, height: windowHeight}}
          onLoopEnd={onStopHandler}
          autoplay={true}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={onPressHandler} title="Skip Intro" />
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
    bottom: '5%',
    right: '5%',
  },
});

export default IntroScreen;
