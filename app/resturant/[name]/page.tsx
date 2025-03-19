/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { lists } from '../../../data'
import Intro from '../_components/Intro';
import Tabs from '../_components/Tabs';
const Page = () => {
    const params = usePathname();
    const [res, setRes] = useState<any>({})
    useEffect(() => {
        setRes(lists.find((x) => x.slug == params.split('/')[2]))
    }, [params])
    return (
        <div className='max-w-[80%] mx-auto mt-10 px-10'>
            <Intro res={res} />
            <Tabs res={res} />
        </div>
    )
}

export default Page