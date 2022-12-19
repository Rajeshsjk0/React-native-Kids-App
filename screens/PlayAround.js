import React, {useEffect, useState} from 'react';
import Rive, {RiveRef} from 'rive-react-native';

import {StyleSheet, View, Dimensions, Text} from 'react-native';

import Sound from 'react-native-sound';

const PlayAround = () => {
  useEffect(() => {
    var sound1 = new Sound(
      require('./../assets/audios/advertising.mp3'),
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
  }, []);

  return (
    <View style={styles.container}>
      <Text>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default PlayAround;

/* 
<Rive
        resourceName={resourceName}
        autoplay={true}
        artboardName={'Scene'}
        fit={((FitWidth = 'fitWidth'), (FitHeight = 'fitHeight'))}
        style={{width: windowWidth, height: windowHeight}}
        // onPlay={onPlayHandler}
        // onStop={onStopHandler}
        // onLoopEnd={onStopHandler}
      /> */

/* const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;
    
      function onPlayHandler() {
        console.log('Played');
      }
    
      function onStopHandler() {
        console.log('Stoped');
      } */
