import { FC } from 'react';
import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
  SliderOutput,
  Label,
} from 'react-aria-components';
import styles from './index.module.css';
import { sliderRangeIndexes } from '../../common/consts.ts';

interface SliderProps {
  value: number;
  range: number[];
  onChange: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ value, range, onChange }) => {
  return (
    <AriaSlider
      className={styles.slider}
      value={value}
      onChange={onChange}
      minValue={range[sliderRangeIndexes.minRange]}
      maxValue={range[sliderRangeIndexes.maxRange]}
    >
      <Label></Label>
      <SliderTrack className={styles.sliderTrack}>
        <SliderThumb className={styles.sliderThumb} />
      </SliderTrack>
      <SliderOutput className={styles.sliderOutput}>{value}</SliderOutput>
    </AriaSlider>
  );
};

export default Slider;
