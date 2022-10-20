import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const { height: SCREENT_HEIGHT, width: SCREEN_WITH } = Dimensions.get("window");

const API_KEY = "발급 받은 API 키";

export default function WeathreApp() {
  const [city, setCity] = useState("Loading...");
  const [dayWeathers, setdayWeathers] = useState([]);
  const [isPermission, setIsPermission] = useState(true);

  const requestPermission = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      setIsPermission(false);
      return false;
    }

    return true;
  };

  useEffect(() => {
    (async () => {
      let isPermission = requestPermission();

      if (isPermission) {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({ accuracy: 5 });
        const location = await Location.reverseGeocodeAsync(
          { latitude, longitude },
          { useGoogleMaps: false }
        );
        setCity(location[0].city);

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_KEY}&units=metric`
        );
        const weatherJson = await weatherResponse.json();
        setdayWeathers(weatherJson.daily);
        console.log(dayWeathers);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        style={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {typeof dayWeathers === "undefined" || dayWeathers.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="black" size="large" />
          </View>
        ) : (
          dayWeathers.map((day, index) => {
            <View style={styles.day}>
              <Text style={styles.temp}>
                {parseFloat(day.tmep.day).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>;
          })
        )}
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

  tinyText: {
    fontSize: 20,
  },
});
