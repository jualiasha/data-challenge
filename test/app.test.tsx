import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  let input: HTMLInputElement;
  let slider: HTMLElement;
  beforeEach(() => {
    render(<App />);
    input = screen.getByTestId('input');
    slider = screen.getByTestId('slider');
  });
  it('renders the form with initial values', () => {
    expect(screen.getByText('Slider Play')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('clears the form when clicking the Clear Button', () => {
    fireEvent.click(screen.getByRole('button', { name: /Clear/i }));
    expect(input).toHaveValue('50');
    expect(slider).toHaveTextContent('50');
  });

  it('submits the form and alerts the value', () => {
    window.alert = vi.fn();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(window.alert).toHaveBeenCalledWith('Submitted Value: 50');
  });
  it('adds +1 on pressing +', () => {
    fireEvent.click(screen.getByRole('button', { name: /\+/i }));
    fireEvent.click(screen.getByRole('button', { name: /\+/i }));
    expect(input).toHaveValue('52');
    expect(slider).toHaveTextContent('52');
  });
  it('makes -1 on pressing -', () => {
    fireEvent.click(screen.getByRole('button', { name: /-/i }));
    fireEvent.click(screen.getByRole('button', { name: /-/i }));
    expect(input).toHaveValue('48');
    expect(slider).toHaveTextContent('48');
  });
});
