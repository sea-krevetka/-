import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="pfp-calendar">

    </div>
  );
};

export default Calendar;