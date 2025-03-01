import { FC } from 'react';
import { Input as AriaInput } from 'react-aria-components';
import styles from './index.module.css';

interface InputProps {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ disabled, value, onChange }) => {
  return (
    <AriaInput
      className={`${styles.input} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
