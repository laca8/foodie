'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Plus } from 'lucide-react'
import { addToCart } from '@/redux/slicer/cartSlice'
import { useAppDispatch } from '../../../redux/hooks'
type Props = {
    item: any
}

const AddCart = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    const handleAdd = () => {
        // console.log(item);
        dispatch(addToCart(item))


    }
    return (
        <Plus onClick={handleAdd} className='rounded-full border-2 border-gray-500 cursor-pointer hover:scale-95' />
    )
}

export default AddCart