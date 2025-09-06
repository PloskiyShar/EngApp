import {StyleSheet} from 'react-native';
import {Text, View} from '@components/Themed';
import {Stack, useLocalSearchParams} from "expo-router";

export default function IdiomDetailsScreen() {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Details'}}/>
      <Text>Details Screen</Text>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
