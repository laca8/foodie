/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Category from './Category'
import ReviewForm from './Review'
type Props = {
    res: any
}

const TabsComp = ({ res }: Props) => {
    return (
        <div className='mt-4'>
            <Tabs defaultValue="About">
                <TabsList className="grid  grid-cols-3 w-[400px]">
                    <TabsTrigger value="Category">Category</TabsTrigger>
                    <TabsTrigger value="About">About</TabsTrigger>
                    <TabsTrigger value="Reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="Category">
                    <Category res={res} />
                </TabsContent>
                <TabsContent value="About">
                    <h1 className='font-semibold text-[var(--primary-color)] mb-2'>About</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolores,
                        excepturi tenetur neque praesentium a quaerat non cumque corporis optio facilis facere,
                        sit explicabo beatae similique possimus laboriosam ipsum! Qui.
                    </p>
                </TabsContent>
                <TabsContent value="Reviews">
                    <ReviewForm />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default TabsComp