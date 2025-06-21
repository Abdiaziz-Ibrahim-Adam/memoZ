import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/ui/Header';

describe('Header', () => {
  it('visar titeln', () => {
    render(<Header title="memoZ" />);
    expect(screen.getByText('memoZ')).toBeInTheDocument();
  });
});
