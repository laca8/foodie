"use client"

import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface QuantityInputProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export default function QuantityInput({ quantity, onIncrease, onDecrease }: QuantityInputProps) {
    return (
        <div className="flex items-center">
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-r-none"
                onClick={onDecrease}
                disabled={quantity <= 1}
            >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
            </Button>
            <Input
                type="number"
                min="1"
                value={quantity}
                readOnly
                className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none" onClick={onIncrease}>
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
            </Button>
        </div>
    )
}

