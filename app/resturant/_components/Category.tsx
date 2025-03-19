
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'
import AddCart from './AddCart'
type Props = {
    res: any
}
const Category = ({ res }: Props) => {
    return (
        <div>
            <Tabs defaultValue={res.categories[0].meals[0].name} className='flex flex-row'>
                <TabsList className="flex flex-col h-20">
                    {
                        res.categories[0].meals.map((x: any, i: number) => (
                            <TabsTrigger value={x.name} key={i} className='font-light text-sm'>{x.name}</TabsTrigger>

                        ))
                    }
                </TabsList>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        res.categories[0].meals.map((x: any, i: number) => (
                            <TabsContent value={x.name} key={i} className='border-2 border-[var(--primary-color)]  shadow-md p-2 rounded-md'>
                                <div className='flex flex-row gap-2'>
                                    <Image src={x?.url} alt={x.name}
                                        loader={({ src }) => src}
                                        width={100}
                                        height={0}
                                        className='w-20 h-20 rounded-md'
                                    />
                                    <div className='flex flex-col gap-2 font-semibold'>
                                        <h1 className='text-[var(--primary-color)] line-clamp-1 '>{x.name}</h1>
                                        <p className='text-gray-400'>${x.price}</p>
                                        <AddCart item={x} />
                                    </div>
                                </div>
                            </TabsContent>

                        ))
                    }
                </div>


            </Tabs>
        </div>
    )
}

export default Category