import { View, StyleSheet, Text, TextInput } from 'react-native';

function SearchBar() {
  return (
    <View>
      <TextInput style={styles.searchBar} placeholder={'Search here..'} />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 20,
  },
});
