import React from 'react';
import { render } from '@testing-library/react-native';
import Schema from '@/app/(tabs)/schema';

describe('Schema skärm', () => {
  it('visar rubriken Schema', () => {
    const { getByText } = render(<Schema />);
    expect(getByText('Schema')).toBeTruthy();
  });
});
