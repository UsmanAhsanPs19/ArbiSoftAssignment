import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import colors from '../../utils/colors';
import { BORDER_RADIUS, INPUT_HEIGHT } from '../../utils/sizes';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity style={{...styles.container,backgroundColor:"#4F6D7B", borderRadius:20}} onPress={onPress}>
      <Text style={{...styles.text,paddingVertical: 15,fontFamily:'Roboto-Regular', color:colors.white}}>{text}</Text>
    </TouchableOpacity>
);

export default ClearButton;
