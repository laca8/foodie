'use client'
import React, { useEffect, useState } from 'react'
import { lists } from '../../data'
import Loader from '../../components/features/Loader'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Suspense } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
const List = () => {
    const params = useSearchParams();
    const [data, setData] = useState<typeof lists>([])
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const category = params.get('category');
        setLoading(true)
        if (!category || category != 'all') {
            setData(lists.filter((x) => x.categories[0].name.toLowerCase() == category))
            setLoading(false)
        } else {
            setData(lists)
            setLoading(false)
        }
    }, [params])

    return (
        <Suspense fallback={<Loader />}>
            <div className='font-semibold px-6'>
                <h1>Popular all Restaurants</h1>
                {
                    loading ? <Loader /> : (
                        <>
                            <p className='text-[var(--primary-color)]'>{lists.length} Results</p>
                            <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 mt-2'>
                                {
                                    data.map((x, i) => (
                                        <div
                                            onClick={() => router.push(`/resturant/${x.slug}`)}
                                            key={i} className='cursor-pointer p-4 rounded-md shadow-md hover:bg-orange-100 border-2 hover:border-[var(--primary-color)] transition-all duration-200'>
                                            <Image src={x?.url} alt={x.name}
                                                loader={({ src }) => src}
                                                width={100}
                                                height={0}
                                                className=' w-full h-40 rounded-md'
                                            />
                                            <h1>{x.name}</h1>
                                            <div className='flex justify-between'>
                                                <div className='flex gap-1 items-center text-sm text-gray-400'>
                                                    <Star className='h-5 w-5 text-yellow-400' />
                                                    <span>{x.rate}</span>
                                                    <span>{x.restroType}</span>
                                                </div>
                                                <p className='text-[var(--primary-color)]'>{x.categories[0].name}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </Suspense>
    )
}

export default List