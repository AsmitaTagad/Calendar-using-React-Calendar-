import React,{ useState } from "react";
import Calendar from "react-calendar";

export default function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="header">Calendar </h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
}
