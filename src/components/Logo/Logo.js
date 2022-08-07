import React, { Component, useEffect } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet, Dimensions } from 'react-native';

import styles from './styles';

const imageWidth = Dimensions.get('window').width / 2;

const imageSizes = {
  smallContainerSize: imageWidth / 3,
  smallImageSize: imageWidth / 4,
  largeContainerSize: imageWidth,
  largeImageSize: imageWidth / 3,
};

const ANIMATION_DURATION = 250;

function Logo ({tintColor, Icontext}){

  const containerImageWidth = new Animated.Value(imageSizes.largeContainerSize);
  useEffect(() => {
    // const keyboardDidShowListener = Keyboard.addListener(
    //   'keyboardDidShow',
    //   () => {
    //     keyboardWillShow() // or some other action
    //   }
    // );
    // const keyboardDidHideListener = Keyboard.addListener(
    //   'keyboardDidHide',
    //   () => {
    //     keyboardWillHide() // or some other action
    //   }
    // );

    // return () => {
    //   keyboardDidHideListener.remove();
    //   keyboardDidShowListener.remove();
    // };
  }, []);

  const keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: imageSizes.smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: imageSizes.smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: imageSizes.largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: imageSizes.largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];
    const imageStyles = [
      styles.logo,
      { width: imageWidth },
      tintColor ? { tintColor: tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>{Icontext}</Text>
      </View>
    );
}

export default Logo;
