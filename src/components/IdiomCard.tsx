import {Pressable, StyleSheet, Text, View} from "react-native";
import {Idiom} from "@/types";
import {Link} from "expo-router";

type IdiomCardProps = {
  idiom: Idiom;
}


const IdiomCard = ({idiom}: IdiomCardProps) => {
  const {term, definition, examples} = idiom;
  return (
    <Link href={`/idioms/${term}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>{term}</Text>
          <Text style={{fontStyle: 'italic', marginBottom: 20}}>{definition}</Text>
          {examples.map(({en, ru}) =>
            <>
              <Text style={{fontStyle: 'italic', marginBottom: 2}}>{en}</Text>
              <Text style={{marginBottom: 10, opacity: 0.8}}>{ru}</Text>
            </>
          )}
        </View>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start"
  },
  header: {}
});

export default IdiomCard;