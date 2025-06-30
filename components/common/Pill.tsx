import { PillProps } from '@/interfaces'
import React from 'react'

const Pill: React.FC<PillProps> = ({
    label,
    bgColor = 'bg-white',
    textColor = 'text-[#161117]',
    className
}) => {
  return (
    <button className={`${bgColor} ${textColor} border border-[#E9E9E9] rounded-3xl max-h-fit w-fit p-2 ${className} transition duration-300 ease-in-out hover:bg-green-400`}>{label}</button>
  )
}

export default Pill