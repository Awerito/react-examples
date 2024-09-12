import { useState } from 'react';

const RangeSlide = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(100);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMinValue(value);
    if (value > maxValue) {
      setMaxValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMaxValue(value);
    if (value < minValue) {
      setMinValue(value);
    }
  };

  const handleRangeMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= rangeMax) setRangeMin(value);
  };

  const handleRangeMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= rangeMin) setRangeMax(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <label>
          Min:
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
          />
        </label>
      </div>
      <div>
        <label>
          Max:
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
          />
        </label>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>
          Range Min:
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={rangeMin}
            onChange={handleRangeMinChange}
          />
        </label>
        <span>{rangeMin}</span>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>
          Range Max:
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={rangeMax}
            onChange={handleRangeMaxChange}
          />
        </label>
        <span>{rangeMax}</span>
      </div>
    </div>
  );
};

export default RangeSlide;
