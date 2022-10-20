import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const { height: SCREENT_HEIGHT, width: SCREEN_WITH } = Dimensions.get("window");

export default function WeathreApp() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        style={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79EDFF",
  },

  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cityName: {
    color: "black",
    fontSize: 68,
    fontWeight: "600",
  },

  weather: {},

  day: {
    width: SCREEN_WITH,
    alignItems: "center",
  },

  temp: {
    marginTop: 30,
    fontSize: 180,
  },

  description: {
    marginTop: -40,
    fontSize: 50,
  },
});
