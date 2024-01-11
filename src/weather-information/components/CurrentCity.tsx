import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 80,
    marginTop: 16,
  },
  iconContainer: {
    position: 'absolute',
    fontWeight: 900,
  },
});

export interface CurrentCityProps {
  temperature: number;
  description: string;
}

export default function CurrentCity({ description, temperature }: CurrentCityProps) {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{description}</Text>
      <Text variant="displayLarge" style={styles.temperature}>
        {temperature}
        <View style={styles.iconContainer}>
          <Icon source="circle" size={20} />
        </View>
      </Text>
    </View>
  );
}
