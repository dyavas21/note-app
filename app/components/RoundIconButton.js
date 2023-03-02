import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';

function RoundIconButton({ iconName, color, size, style, onPress }) {
  return (
    <AntDesign
      name={iconName}
      size={size || 24}
      color={color || 'white'}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
}

export default RoundIconButton;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
  },
});
