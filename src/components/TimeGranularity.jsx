import { useState } from 'react';
import './TimeGranularity.css'


const TimeGranularity = ({ selected, setSelected }) => {

  const [isActive, setIsActive] = useState(false)
  const options = ['day', "week", 'month', 'year'] 
  
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected ? selected : 'Month'}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  ); 
}

export default TimeGranularity
