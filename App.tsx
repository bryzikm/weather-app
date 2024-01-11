import { StyleSheet, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WeatherInformation from './src/weather-information';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 1000,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function App() {
  return (
    <SafeAreaView>
      <SafeAreaProvider>
        <View style={styles.container}>
          <WeatherInformation />
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}
