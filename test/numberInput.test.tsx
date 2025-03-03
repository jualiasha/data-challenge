import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NumberInput from '../src/components/NumberInput';

describe('NumberInput Component', () => {
  it('renders with initial value', () => {
    const onError = vi.fn();
    const onChange = vi.fn();
    render(
      <NumberInput
        value={50}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    expect(screen.getByDisplayValue('50')).toBeInTheDocument();
  });

  it('increments value when clicking plus Button', () => {
    const onChange = vi.fn();
    const onError = vi.fn();
    render(
      <NumberInput
        value={50}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    fireEvent.click(screen.getByText('+'));
    const error = screen.queryByTestId('error-message');
    expect(error).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(51);
    expect(onError).toHaveBeenCalled();
  });

  it('decrements value when clicking minus Button', () => {
    const onChange = vi.fn();
    const onError = vi.fn();
    render(
      <NumberInput
        value={50}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    fireEvent.click(screen.getByText('-'));
    const error = screen.queryByTestId('error-message');
    expect(error).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(49);
    expect(onError).toHaveBeenCalled();
  });

  it('does not decrement below min value', () => {
    const onChange = vi.fn();
    const onError = vi.fn();
    render(
      <NumberInput
        value={0}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    fireEvent.click(screen.getByText('-'));
    const error = screen.getByTestId('error-message');
    expect(error).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });

  it('does not increment above max value', () => {
    const onChange = vi.fn();
    const onError = vi.fn();
    render(
      <NumberInput
        value={100}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    fireEvent.click(screen.getByText('+'));
    const error = screen.getByTestId('error-message');
    expect(error).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });
  it('gives error when value is text', () => {
    const onChange = vi.fn();
    const onError = vi.fn();
    render(
      <NumberInput
        value={100}
        onChange={onChange}
        onError={onError}
        range={[0, 100]}
      />,
    );
    const input = screen.getByTestId('input');
    fireEvent.input(input, { target: { value: '-' } });
    const error = screen.queryByTestId('error-message');
    expect(error).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });
});
