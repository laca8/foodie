'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import React, { useCallback } from 'react'
import QuantityInput from './_components/QuantityInput'
import { Button } from '@/components/ui/button'
import DeleteFromCart from '../resturant/_components/DeleteFromCart'
import { updateQuantity } from '../../redux/slicer/cartSlice'
const Page = () => {
    const dispatch = useAppDispatch()
    const carts = useAppSelector((state) => state.cartSlice)
    const { totalAmount, items } = carts
    // ✅ استخدام useCallback لمنع التحديث المتكرر
    const handleUpdate = useCallback((name: string, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ name, quantity }));
        }
    }, [dispatch]);

    const shipping: number = 10 //totalAmount > 100 ? 0 :
    const total: number = totalAmount + shipping
    return (
        <div className="space-y-4 grid grid-cols-3 max-md:grid-cols-1 gap-4 mt-10 px-10 mx-auto">
            <div className='col-span-2 flex flex-col gap-2'>

                {items.map((item: any, i: number) => (
                    <Card key={i} className="p-4 mb-2">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src={item?.url || "/placeholder.svg"}
                                    loader={({ src }) => src}
                                    alt={item.name}
                                    width={100}
                                    height={150}
                                    className="rounded-md h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-medium text-lg">{item.name}</h3>
                                <p className="text-muted-foreground mb-2">${item.price.toFixed(2)}</p>
                                <div className="flex flex-wrap items-center gap-4 mt-2">
                                    <QuantityInput
                                        quantity={item.quantity}
                                        onIncrease={() => handleUpdate(item.name, item.quantity + 1)}
                                        onDecrease={() => handleUpdate(item.name, item.quantity - 1)}
                                    />
                                    <DeleteFromCart item={item} />
                                </div>
                            </div>
                            <div className="font-semibold text-right mt-2 sm:mt-0">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    </Card>
                ))}
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalAmount?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Proceed to Checkout</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Page