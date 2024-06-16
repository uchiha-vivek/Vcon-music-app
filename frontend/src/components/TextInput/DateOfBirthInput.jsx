import React, { useState } from 'react';

const DateOfBirthInput = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  return (
    <div className="flex flex-col mb-5">
      <label className="mb-2 font-bold">Date of Birth</label>
      <div className="flex space-x-3">
        <select
          value={day}
          onChange={handleDayChange}
          className="p-2 border border-gray-300 rounded w-20"
        >
          <option value="" disabled>Day</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <select
          value={month}
          onChange={handleMonthChange}
          className="p-2 border border-gray-300 rounded w-32"
        >
          <option value="" disabled>Month</option>
          {[
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
          ].map((month, index) => (
            <option key={month} value={index + 1}>{month}</option>
          ))}
        </select>
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Year"
          className="p-2 border border-gray-300 rounded w-24"
        />
      </div>
    </div>
  );
};

export default DateOfBirthInput;
