import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';

function RoundIconButton({ iconName, color, size, style, onPress }) {
  return (
    <View style={[styles.icon, { ...style }]}>
      <AntDesign
        name={iconName}
        size={size || 24}
        color={color || 'white'}
        onPress={onPress}
      />
    </View>
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
