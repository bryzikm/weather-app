import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: '50%',
    textAlign: 'center',
  },
});

export default function EmptySearchHistory() {
  return (
    <View style={styles.container}>
      <Icon source="information-outline" size={36} />
      <Text variant="titleLarge">First you need to search for a city.</Text>
    </View>
  );
}
