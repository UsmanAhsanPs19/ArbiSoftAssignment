import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import colors from '../../utils/colors';
import { BORDER_RADIUS, INPUT_HEIGHT } from '../../utils/sizes';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity style={{...styles.container,backgroundColor:colors.white, height: INPUT_HEIGHT, borderRadius:BORDER_RADIUS}} onPress={onPress}>
      <Text style={{...styles.text, color:colors.inputText}}>{text}</Text>
    </TouchableOpacity>
);

export default ClearButton;
