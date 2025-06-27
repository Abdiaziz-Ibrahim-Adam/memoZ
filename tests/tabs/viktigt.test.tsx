import React from 'react';
import { render } from '@testing-library/react-native';
import Viktigt from '@/app/(tabs)/viktigt';

describe('Viktigt skärm', () => {
  it('visar listan av viktiga saker', () => {
    const { getByText } = render(<Viktigt />);
    expect(getByText('Viktiga tider')).toBeTruthy();
  });
});
