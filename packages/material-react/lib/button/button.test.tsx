import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders all kinds of styles', () => {
    render(<Button icon='add' labelText='Enabled' />);
    expect(screen.getAllByText(/enabled/i)).toHaveLength(1);
    expect(screen.getAllByText(/add/i)).toHaveLength(1);
  });
});