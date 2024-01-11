import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export interface InlineInfoTextProps {
  label: string;
  value: string;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  bolderText: {
    fontWeight: '700',
  },
});

export default function InlineInfoText({ label, value }: InlineInfoTextProps) {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">{label}: </Text>
      <Text variant="titleMedium" style={styles.bolderText}>
        {value}
      </Text>
    </View>
  );
}
