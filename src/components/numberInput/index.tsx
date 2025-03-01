import { FC, useState } from 'react';
import Button from '../button';
import Input from '../input';
import styles from './index.module.css';
import { sliderRangeIndexes } from '../../common/consts.ts';

interface NumberInputProps {
  value: number;
  range: number[];
  disabled?: boolean;
  onChange: (value: number) => void;
}

const NumberInput: FC<NumberInputProps> = ({
  value,
  range,
  onChange,
  disabled,
}) => {
  const [error, setError] = useState('');

  const handleChange = (newValue: number) => {
    const min = range[sliderRangeIndexes.minRange];
    const max = range[sliderRangeIndexes.maxRange];
    if (newValue < min) {
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
    <>
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
      <div className={styles.errorWrapper}>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </>
  );
};

export default NumberInput;
