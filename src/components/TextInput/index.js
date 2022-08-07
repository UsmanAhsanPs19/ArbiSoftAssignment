import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';

const TextInputComp = (props) => {

  return (
    <View style={styles.container}>
      {props.isTag && <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={colors.lightGray}
      >
        <Text style={{...styles.buttonText, color: props.textColor}}>{props.buttonText}</Text>
      </TouchableHighlight>}
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

export default TextInputComp;
