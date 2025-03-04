import { FC } from 'react';
import { Input as AriaInput } from 'react-aria-components';
import styles from './index.module.css';

interface InputProps {
  disabled?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ disabled, value, error, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <AriaInput
        data-testid={'input'}
        className={`${styles.input} ${disabled ? styles.disabled : ''}`}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={styles.errorWrapper}>
        {error && (
          <span data-testid={'error-message'} className={styles.error}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
