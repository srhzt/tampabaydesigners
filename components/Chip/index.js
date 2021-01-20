import React from 'react'

const ChipClass = 'transition items-center inline-flex py-2 px-4 text-xs rounded-full font-mono mb-2 mt-2'

export default function Chip(props) {

  let stateClass = ''

  switch (props.type) {
    case 'red':
      stateClass = 'bg-red-500 bg-opacity-10 dark:bg-opacity-20 text-red-500'
      break;
    case 'blue':
      stateClass = 'bg-blue-500 bg-opacity-10 dark:bg-opacity-20 text-blue-500 dark:text-blue-400'
      break;
    case 'green':
      stateClass = 'bg-green-500 bg-opacity-10 dark:bg-opacity-20 text-green-500'
      break;
    case 'purple':
      stateClass = 'bg-purple-500 bg-opacity-10 dark:bg-opacity-20 text-purple-500'
      break;
    case 'yellow':
      stateClass = 'bg-yellow-500 bg-opacity-10 dark:bg-opacity-20 text-yellow-600 dark:text-yellow-500'
      break;
    case 'indigo':
      stateClass = 'bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 text-indigo-500'
      break;
    case 'pink':
      stateClass = 'bg-pink-500 bg-opacity-10 dark:bg-opacity-20 text-pink-500'
      break;
    default:
      stateClass = 'bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20'
  }

  return(
    <div className={`${ChipClass} ${props.marginLeft ? 'ml-2' : 'ml-0'} ${props.marginRight ? 'mr-2' : 'mr-0'} ${stateClass}`}>
      {props.children}
    </div>
  )
}

export const ChipLink = (props) => {
  let stateClass = ''

  switch (props.type) {
    case 'red':
      stateClass = 'bg-red-500 bg-opacity-10 dark:bg-opacity-20 text-red-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'blue':
      stateClass = 'bg-blue-500 bg-opacity-10 dark:bg-opacity-20 text-blue-500 dark:text-blue-400 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'green':
      stateClass = 'bg-green-500 bg-opacity-10 dark:bg-opacity-20 text-green-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'purple':
      stateClass = 'bg-purple-500 bg-opacity-10 dark:bg-opacity-20 text-purple-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'yellow':
      stateClass = 'bg-yellow-500 bg-opacity-10 dark:bg-opacity-20 text-yellow-600 dark:text-yellow-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'indigo':
      stateClass = 'bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 text-indigo-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    case 'pink':
      stateClass = 'bg-pink-500 bg-opacity-10 dark:bg-opacity-20 text-pink-500 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white'
      break;
    default:
      stateClass = 'bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:text-white dark:hover:text-black'
  }

  return(
    <a target="_blank" href={props.href} className={`${ChipClass} ${props.marginLeft ? 'ml-2' : 'ml-0'} ${props.marginRight ? 'mr-2' : 'mr-0'} ${stateClass}`}>
      {props.children}
    </a>
  )
}