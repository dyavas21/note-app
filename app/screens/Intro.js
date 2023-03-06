import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RoundIconButton from '../components/RoundIconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({ onFinish }) => {
  const [name, setName] = useState('');
  const handleOnChangeText = text => setName(text);

  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={handleOnChangeText}
        />
        {name.trim().length >= 3 ? (
          <RoundIconButton iconName='arrowright' onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

export default Intro;

const width = Dimensions.get('window').width - 50;
console.log(width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'red',
    width,
    textAlign: 'center',
    borderRadius: 10,
    height: 40,
    fontSize: 24,
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
});
