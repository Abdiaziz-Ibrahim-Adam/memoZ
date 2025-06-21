import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Demo', () => {
  it('visar en demo-text', () => {
    render(<p>Hello test</p>);
    expect(screen.getByText('Hello test')).toBeInTheDocument();
  });
}); 
