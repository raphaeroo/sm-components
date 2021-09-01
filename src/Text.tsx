import React from 'react';
import { Text as RNText } from 'react-native';

interface TextProps {
  textKey: string;
  color?: 'red' | 'blue';
}

export const Text = ({ textKey, color }: TextProps) => (
  <RNText style={{ color }}>{textKey}</RNText>
);
