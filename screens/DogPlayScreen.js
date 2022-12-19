import React, {useEffect, useState} from 'react';
import Rive, {RiveRef} from 'rive-react-native';
import Sound from 'react-native-sound';

import {StyleSheet, View, Button, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DogPlayScreen = ({navigation}) => {
  useEffect(() => {
    var sound1 = new Sound(
      require('./../assets/audios/dog.mp3'),
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

  const [isPlaying, setIsPlaying] = useState(false);
  const riveRef = React.useRef(null);

  function onPressHandler() {
    if (isPlaying) {
      riveRef.current?.pause();
      setIsPlaying(false);
    } else {
      riveRef.current?.play();
      setIsPlaying(true);
    }
  }

  const resourceName = 'dog';
  return (
    <View style={styles.container}>
      <View>
        <Rive
          ref={riveRef}
          resourceName={resourceName}
          fit={((FitWidth = 'fitWidth'), (FitHeight = 'fitHeight'))}
          style={{width: windowWidth, height: windowHeight}}
          autoplay={false}
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
  },
  button: {
    position: 'absolute',
    bottom: '58%',
    left: '28%',
    opacity: 0,
  },
});

export default DogPlayScreen;
