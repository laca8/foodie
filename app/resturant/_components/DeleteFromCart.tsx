'use client'

import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

import { removeFromCart } from '@/redux/slicer/cartSlice'
import { useAppDispatch } from '@/redux/hooks'
type Props = {
    item: { name: string }
}

const DeleteFromCart = ({ item }: Props) => {
    const dispatch = useAppDispatch()

    const removeItem = (name: string) => {
        dispatch(removeFromCart(name))
    }
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.name)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Remove item</span>
        </Button>
    )
}

export default DeleteFromCart