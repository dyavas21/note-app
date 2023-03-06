import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Modal } from 'react-native';

function NoteInputModal({ visible }) {
  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType='fade'>
        <Text style={styles.modalText}>Note input modal</Text>
      </Modal>
    </>
  );
}

export default NoteInputModal;

const styles = StyleSheet.create({
  modalText: {
    padding: 30,
  },
});
