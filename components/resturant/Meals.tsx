'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { mealsData } from '../../data'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
const Meals = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const params = useSearchParams();
    useEffect(() => {
        const category = params ? params.get('category') : 'all';
        if (category) {
            setSelectedCategory(category);
        }
    }, [params])

    return (
        <div className=''>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full p-4"
            >
                <CarouselContent>
                    {mealsData.map((category, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 max-sm:1/1 md:basis-1/6 max-md:1/4 max-lg:1/8 lg:basis-1/10">
                            <div className="p-1">

                                <Link href={'?category=' + category.slug} key={index}
                                    className={`flex flex-col items-center
                                                        gap-2 border p-3 rounded-xl min-w-28
                                                        hover:border-primary hover:bg-[var(--primary-color)]
                                                        cursor-pointer group
                                                        ${selectedCategory == category.slug && 'text-primary border-[var(--primary-color)] bg-[var(--primary-color)]'}
                                                        `}>
                                    <Image src={category.icon?.url} alt={category.name}
                                        loader={({ src }) => src}
                                        width={40}
                                        height={40}
                                        className='group-hover:scale-125 transition-all duration-200'
                                    />
                                    <h2 className='text-sm font-medium group-hover:text-primary'>{category.name}</h2>
                                </Link>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default Meals