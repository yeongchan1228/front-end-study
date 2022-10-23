import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "../colors";

export default function TodoApp() {
  return (
    <View style={styles.container}>
      <StatusBar style="white" />
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.btnText}>Work</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.btnText}>Travel</Text>
        </Pressable>
      </View>
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
    marginTop: 100,
  },

  btnText: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },
});
