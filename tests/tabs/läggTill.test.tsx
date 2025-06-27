import React from 'react';
import { render } from '@testing-library/react-native';
import LäggTill from '@/app/(tabs)/läggTill';

describe('LäggTill skärm', () => {
  it('visar formulär för att lägga till nya uppgifter', () => {
    const { getByText } = render(<LäggTill />);
    expect(getByText('Lägg till')).toBeTruthy();
  });
});
