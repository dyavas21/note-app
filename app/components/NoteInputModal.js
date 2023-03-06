import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import RoundIconButton from './RoundIconButton';

function NoteInputModal({ visible, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleCancel = () => {
    setTitle('');
    setDesc('');
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    onSubmit(title, desc);
    setTitle('');
    setDesc('');
    onClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal
        style={styles.modalContainer}
        visible={visible}
        animationType='fade'
      >
        <View style={styles.modalView}>
          <TextInput
            value={title}
            placeholder='Title: '
            style={[styles.title, styles.input]}
            onChangeText={text => handleOnChangeText(text, 'title')}
          />
          <TextInput
            value={desc}
            multiline
            placeholder='Note:'
            style={[styles.note, styles.input]}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <RoundIconButton
              iconName='check'
              size={15}
              onPress={handleSubmit}
            />
            {title.trim() || desc.trim() ? (
              <RoundIconButton
                iconName='close'
                size={15}
                style={{ marginLeft: 20 }}
                onPress={handleCancel}
              />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFill]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default NoteInputModal;

const styles = StyleSheet.create({
  modalContainer: {},
  modalView: {
    marginTop: Platform.OS === 'ios' ? 60 : 30,
    marginHorizontal: 24,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingVertical: 10,
    fontSize: 20,
    color: 'black',
  },
  title: {
    fontWeight: '700',
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
});
