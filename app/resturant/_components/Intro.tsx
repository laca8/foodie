/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    res: any
}

const Intro = ({ res }: Props) => {
    return (
        <div >
            <Image src={res?.url} alt={res.name}
                loader={({ src }) => src}
                width={100}
                height={0}
                className=' w-full h-96 rounded-md'
            />
            <div>
                <h1 className='text-2xl font-bold'>{res.name}</h1>
                <div className='flex gap-1 items-center text-md font-medium text-gray-400'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>{res.rate}</span>
                </div>
                <div className='flex gap-1 text-md font-medium text-gray-400'>
                    <MapPin className='h-5 w-5' />
                    {res.address}
                </div>
            </div>
        </div>
    )
}

export default Intro