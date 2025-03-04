import { FC, useEffect, useRef, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import styles from './index.module.css';
import { sliderRangeIndexes } from '../../common/consts.ts';

interface NumberInputProps {
  value: number;
  range: number[];
  disabled?: boolean;
  onChange: (value: number) => void;
  onError: (value: string) => void;
}

const NumberInput: FC<NumberInputProps> = ({
  value,
  range,
  onChange,
  onError,
  disabled,
}) => {
  const [error, setError] = useState('');
  const prevErrorMessage = useRef<string | null>(null);

  useEffect(() => {
    if (prevErrorMessage.current !== error) {
      onError(error);
      prevErrorMessage.current = error;
    }
  }, [error]);

  // handles value change
  // Validate Input range and set error messages accordingly
  const handleChange = (newValue: number) => {
    const min = range[sliderRangeIndexes.minRange];
    const max = range[sliderRangeIndexes.maxRange];
    if (newValue < min || isNaN(newValue)) {
      setError(`Value cannot be lower than ${min}`);
      return;
    } else if (newValue > max) {
      setError(`Value cannot be higher than ${max}`);
      return;
    }
    setError('');
    onChange(newValue);
  };
  return (
    <div className={styles.numberInput}>
      <Button
        size="small"
        variant="contained"
        theme="primary"
        onPress={() => handleChange(value - 1)}
        disabled={disabled}
      >
        -
      </Button>
      <Input
        value={value.toString()}
        onChange={(value) => handleChange(Number(value))}
        disabled={disabled}
        error={error}
      />
      <Button
        size="small"
        variant="contained"
        theme="primary"
        onPress={() => handleChange(value + 1)}
        disabled={disabled}
      >
        +
      </Button>
    </div>
  );
};

export default NumberInput;
