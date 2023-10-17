import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const isLoading = true

export default function App() {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text>Weather App</Text>
        </View>
      ) : (
        <View>
          <Text>Fetching</Text>
        </View>
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
