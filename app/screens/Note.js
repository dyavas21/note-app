import SearchBar from '../components/SearchBar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RoundIconButton from '../components/RoundIconButton';
import NoteInputModal from '../components/NoteInputModal';

function Note({ user }) {
  const [greet, setGreet] = useState('');

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.root}>
        <Text style={styles.greet}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar />
        <View style={styles.addNotesContainer}>
          <Text style={styles.addNotesText}>Add Notes</Text>
          <RoundIconButton
            iconName='plus'
            style={styles.plusIcon}
            onPress={() => console.log('opening model')}
          />
        </View>
      </View>
      <NoteInputModal visible={true} />
    </>
  );
}
export default Note;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 50,
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
  },
});
