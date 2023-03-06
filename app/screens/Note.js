import SearchBar from '../components/SearchBar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import RoundIconButton from '../components/RoundIconButton';
import NoteInputModal from '../components/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Note({ user }) {
  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    console.log(result);
    if (result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findNotes();
    findGreet();
  }, []);

  const handleOnSubmit = async (title, desc) => {
    const note = { id: Date.now(), title, desc, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <Text style={styles.greet}>{`Good ${greet} ${user.name}`}</Text>
          <SearchBar />
          <View style={styles.addNotesContainer}>
            <Text style={styles.addNotesText}>Add Notes</Text>
            <RoundIconButton
              onPress={() => setModalVisible(true)}
              iconName='plus'
              style={styles.plusIcon}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
}
export default Note;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 50,
    zIndex: 1,
  },
  greet: {
    fontSize: 24,
    marginBottom: 20,
  },
  addNotesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: -1,
  },
  addNotesText: {
    fontSize: 24,
    fontWeight: '500',
    opacity: 0.2,
  },
  plusIcon: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    elevation: 0.2,
  },
});
