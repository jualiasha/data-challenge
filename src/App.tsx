import Button from './components/Button';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './app.module.css';
import { useState } from 'react';
import NumberInput from './components/NumberInput';
import Slider from './components/Slider';

function App() {
  // State to hold the numeric value controlled by both the Slider and Input
  const [number, setNumber] = useState(50);
  // Min and max range for the number Input and Slider
  const sliderRange = [0, 100];

  // Handles form submission and alerts the selected number
  const handleSubmit = () => {
    alert(`Submitted Value: ${number}`);
  };
  // Resets the form values to default
  const handleClear = () => {
    setNumber(50);
  };

  return (
    <>
      <div className={styles.form}>
        <h2>Slider Play</h2>
        <Slider value={number} range={sliderRange} onChange={setNumber} />
        <NumberInput value={number} onChange={setNumber} range={sliderRange} />
        <div className={styles.actions}>
          <Button
            size="medium"
            variant="outlined"
            theme="secondary"
            onPress={handleClear}
          >
            Clear
          </Button>
          <Button
            size="medium"
            variant="contained"
            theme="primary"
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <h2>Button variants</h2>
      <div className={styles.buttons}>
        {/*Text-Only Button */}
        <Button size="medium" variant="contained" theme="primary">
          Click Me
        </Button>

        {/* Icon-Only Button */}
        <Button
          size="small"
          variant="outlined"
          theme="secondary"
          icon={<FiShoppingCart />}
        />

        {/* Text with Icon Button */}
        <Button
          size="medium"
          variant="contained"
          theme="secondary"
          icon={<FiShoppingCart />}
        >
          Buy Now
        </Button>

        {/* Disabled Button */}
        <Button size="medium" variant="contained" theme="primary" disabled>
          Disabled
        </Button>
      </div>
    </>
  );
}

export default App;
