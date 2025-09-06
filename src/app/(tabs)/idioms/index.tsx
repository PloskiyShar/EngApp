import {FlatList, StyleSheet} from 'react-native';
import data from '@assets/final.json';
import {Text, View} from '@components/Themed';
import IdiomCard from "@components/IdiomCard";
import {Idiom} from "@/types";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(data).slice(0, 40) as Idiom[]}
        renderItem={({item}: Idiom) => <IdiomCard idiom={item} key={item.term}/>}
        contentContainerStyle={{gap: 5, padding: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
