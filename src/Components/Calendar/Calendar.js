import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "./Calendar.css";


const Calendar = (props) => {

    const placeholder = `${utils().getToday().year}/${utils().getToday().month}/${utils().getToday().day}`

    return (
        <DatePicker
            value={props.value}
            onChange={props.onChange}
            colorPrimary="#007bff"
            inputPlaceholder={placeholder}
            inputClassName="form-control datetimepicker-input"
            calendarClassName="custom-calendar responsive-calendar" // and this
            calendarTodayClassName="custom-today-day" // also this
            shouldHighlightWeekends
        />
    );
};

export default Calendar;