import { View } from '@ant-design/react-native';
import { StyleSheet } from 'react-native';

function Note({ item }) {
  const { title, desc } = item;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
}

export default Note();

const styles = StyleSheet.create({});
