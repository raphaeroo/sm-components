import React from 'react';
import { Text as RNText } from 'react-native';

interface TextProps {
  textKey: string;
}

export const Text = ({ textKey }: TextProps) => <RNText>{textKey}</RNText>;
