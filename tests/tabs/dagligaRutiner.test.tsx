import React from 'react';
import { render } from '@testing-library/react-native';
import DagligRutin from '@/app/(tabs)/dagligaRutiner';

describe('DagligRutin skärm', () => {
  it('visar komponent med rätt titel', () => {
    const { getByText } = render(<DagligRutin />);
    expect(getByText('dagliga rutiner')).toBeTruthy();
  });
});
