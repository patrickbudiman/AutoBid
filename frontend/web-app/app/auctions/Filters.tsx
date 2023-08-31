import { useParamsStore } from '@/hooks/useParamsStore';
import { Button } from 'flowbite-react';
import React from 'react'
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizeButtons = [4, 8, 12];
const orderButtons = [
    {
        label: 'Alphabetical',
        icon: AiOutlineSortAscending,
        value: 'make'
    },
    {
        label: 'End date',
        icon: AiOutlineClockCircle,
        value: 'endingSoon'
    },
    {
        label: 'Recently added',
        icon: BsFillStopCircleFill,
        value: 'new'
    },
]

const filterButtons = [
    {
        label: 'Live Auctions',
        icon: GiFlame,
        value: 'live'
    },
    {
        label: 'Ending < 3 hours',
        icon: GiFinishLine,
        value: 'endingSoon'
    },
    {
        label: 'Completed',
        icon: BsStopwatchFill,
        value: 'finished'
    },
]

export default function Filters() {
  const pageSize = useParamsStore(state => state.pageSize);
  const orderBy = useParamsStore(state => state.orderBy);
  const filterBy = useParamsStore(state => state.filterBy);
  const setParams = useParamsStore(state => state.setParams);
  return (
    <div className='flex justify-between items-center mb-4'>
        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>Filter By</span>
            <Button.Group>
                {filterButtons.map(({label,icon: Icon,value})=>(
                    <Button key={value} 
                        onClick={()=>setParams({filterBy: value})}
                        color={`${value === filterBy ? 'red' : 'gray'}`} //highlight selected
                        className='focus:ring-0'
                    >
                        <Icon className='mr-3 h-4 w-4'/>
                        {label}
                    </Button>
                ))}
            </Button.Group>
        </div>
        
        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>Order By</span>
            <Button.Group>
                {orderButtons.map(({label,icon: Icon,value})=>(
                    <Button key={value} 
                        onClick={()=>setParams({orderBy: value})}
                        color={`${value === orderBy ? 'red' : 'gray'}`} //highlight selected
                        className='focus:ring-0'
                    >
                        <Icon className='mr-3 h-4 w-4'/>
                        {label}
                    </Button>
                ))}
            </Button.Group>
        </div>

        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
            <Button.Group>
                {pageSizeButtons.map((value, i)=>(
                    <Button key={i} 
                        onClick={()=>setParams({pageSize: value})}
                        color={`${value === pageSize ? 'red' : 'gray'}`} //highlight selected
                        className='focus:ring-0'
                    >
                        {value}
                    </Button>
                ))}
            </Button.Group>
        </div>
    </div>
  )
}
