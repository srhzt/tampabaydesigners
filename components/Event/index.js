import React from 'react'
import { BoxOutbound } from '@components/Box'
import Chip from '@components/Chip'
import { Calendar } from 'react-feather'

const CalendarItem = ({day, num, month, year}) => {
  return(
    <div className="rounded-lg text-center bg-gray-100 dark:bg-white overflow-hidden dark:bg-opacity-10 shadow flex flex-col w-full">
      <div className="text-xs font-semibold py-1 bg-red-500 uppercase text-white">{day.substring(0, 3)}</div>
      <div className="text-lg md:text-2xl font-extrabold py-1">{num}</div>
      <div className="text-xs pb-1 text-black text-opacity-50 dark:text-white dark:text-opacity-50">{month.substring(0, 3)}{' '}{year}</div>
    </div>
  )
}

export default function Event({img, org, name, description, date, link}) {

  let newDate = new Date()

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const formatDate = date => {
    let d = new Date(date)
    let month = d.getMonth()
    let year = d.getFullYear()
    let day = d.getDay()
    const dateObj = {
      dayString: dayNames[day],
      numString: d.getDate(),
      monthString: monthNames[month],
      yearString: year
    }
    return dateObj
  }
  return(
      <BoxOutbound marginBottom={'4'} href={link} target="_blank">
        <div className="grid grid-cols-8 md:grid-cols-12">
          <div className="col-span-6 md:col-span-10 flex">
            <div className="pr-4 md:pr-8">
              <p className="text-sm mb-2 font-bold">{name}</p>
              <p className="text-xs text-black text-opacity-70 mb-2 dark:text-white dark:text-opacity-70">{description}</p>
              <p className="text-xs text-green-500">Hosted by {org}</p>
            </div>
          </div>
          <div className="relative col-span-2 pt-4">
            <div className="w-12 h-12 absolute transform top-0 -left-4 rounded-full border-4 border-white dark:border-black">
              <img className="block w-full rounded-full" src={img}/>
            </div>
            <CalendarItem
              day={formatDate(date).dayString}
              num={formatDate(date).numString}
              month={formatDate(date).monthString}
              year={formatDate(date).yearString}
            />
          </div>
        </div>
      </BoxOutbound>
  )
}