import React from 'react';
import AvailableSlots from './AvailableSlots';
import Calendar from './Calender.jsx';
import './slotselection.css';

function SlotSelection() {
  return (
    <div className="slot-selection-container">
      <div className="calendar-section">
        <Calendar />
      </div>
      <div className="slots-section">
        <AvailableSlots />
      </div>
    </div>
  );
}

export default SlotSelection;
