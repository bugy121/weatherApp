import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import {API_KEY} from './utils/weatherAPIKey';
import Weather from './components/weather'





export default function App() {
    const stateInit = {
      isLoading: true,
      temperature: 0,
      weatherCondition: null,
      error: null
    }
    const [state,setState] = useState(stateInit)

  function fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
        })
      };

  function componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        state.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    )
  }

  if (state.isLoading){
    componentDidMount();
  }
  console.log(state);

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <Text>Fetching</Text>
      ) : (
        <Weather weather={state.weatherCondition} temp={state.temperature}/>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
