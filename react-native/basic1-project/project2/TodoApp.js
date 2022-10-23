import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from "react-native";
import { theme } from "../colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@toDos";

export default function TodoApp() {
  const [isWorking, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    // save to-do
    const newToDos = { ...toDos, [Date.now()]: { text, isWorking: isWorking } };
    setToDos(newToDos);
    await storeTodos(newToDos);
    setText("");
  };
  const storeTodos = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };
  const loadToDos = async () => {
    setToDos(JSON.parse(await AsyncStorage.getItem(STORAGE_KEY)));
  };

  useEffect(() => {
    loadToDos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="white" />
      <View style={styles.header}>
        <Pressable
          onPress={work}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        >
          <Text
            style={{
              ...styles.btnText,
              color: isWorking ? "white" : theme.gray,
            }}
          >
            Work
          </Text>
        </Pressable>
        <Pressable
          onPress={travel}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        >
          <Text
            style={{
              ...styles.btnText,
              color: !isWorking ? "white" : theme.gray,
            }}
          >
            Travel
          </Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        returnKeyType="done"
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={addTodo}
        placeholder={isWorking ? "Add a To-Do!" : "Where do you want go?"}
      ></TextInput>
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].isWorking === isWorking ? (
            <View style={styles.toDos} key={key}>
              <Text style={styles.toDosText}>{toDos[key].text}</Text>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 20,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
  },

  btnText: {
    fontSize: 25,
    fontWeight: "600",
  },

  input: {
    fontSize: 20,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },

  toDos: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  toDosText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
