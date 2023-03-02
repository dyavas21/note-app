import SearchBar from '../components/SearchBar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
      </View>
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
});
