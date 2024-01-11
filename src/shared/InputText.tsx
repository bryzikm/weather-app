import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';

export interface InputTextProps {
  delay?: number;
  onTextChange: (text: string) => void;
}

export default function InputText({ delay = 500, onTextChange }: InputTextProps) {
  const [internalText, setInternalText] = useState('');

  useEffect(
    function debounceTextUpdate() {
      const timer = setTimeout(() => {
        onTextChange(internalText);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    },
    [internalText, onTextChange, delay],
  );

  return (
    <TextInput
      label="Search by city name"
      value={internalText}
      onChangeText={setInternalText}
      mode="outlined"
      activeOutlineColor="black"
    />
  );
}
