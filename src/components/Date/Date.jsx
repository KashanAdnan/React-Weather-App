import React, { useEffect, useState } from 'react'
import "./Date.css"
const DateComp = () => {
    const [dateNow, setDate] = useState("")
    const [year, setYear] = useState("")
    const [time, setTime] = useState("")
    const [month, setMonth] = useState("")
    setInterval(() => {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "Jul",
            "Aug ",
            "Sep",
            "Nov",
            "Dec"
        ]
        const date = new Date();
        const dateNow = date.getDate();
        setDate(dateNow)
        const month = months[date.getMonth()]
        setMonth(month)
        const year = date.getFullYear();
        setYear(year)
        const time = date.toLocaleTimeString()
        setTime(time)
    }, 1000);

    return (
        <div>
            <p>{dateNow} {month} {year}</p>
            <span>{time}</span>
        </div>
    )
}

export default DateComp
