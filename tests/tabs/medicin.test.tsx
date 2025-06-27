import React from 'react';
import { render } from '@testing-library/react-native';
import Medicin from '@/app/(tabs)/medicin';

describe('Mediciner skärm', () => {
  it('renderar korrekt vy', () => {
    const { getByText } = render(<Medicin />);
    expect(getByText('Mina mediciner')).toBeTruthy();
  });
});
