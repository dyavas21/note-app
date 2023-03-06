import { Text, StyleSheet, View, Pressable } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';

function RoundIconButton({ iconName, color, size, style, onPress }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <View style={[styles.icon]}>
        <AntDesign name={iconName} size={size || 24} color={color || 'white'} />
      </View>
    </Pressable>
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
