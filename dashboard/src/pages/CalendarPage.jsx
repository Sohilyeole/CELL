
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const events = [
    {
      id: 0,
      title: 'Event 1',
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 21),
    },
    {
      id: 1,
      title: 'Event 2',
      start: new Date(2022, 6, 25),
      end: new Date(2022, 6, 26),
    },
    {
      id: 2,
      title: 'Event 3',
      start: new Date(2022, 6, 30),
      end: new Date(2022, 6, 31),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Calendar Page</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="dark:text-gray-200"
        />
      </div>
    </div>
  );
};

export default CalendarPage;

