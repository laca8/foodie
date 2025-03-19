'use client'
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { HandPlatter, SearchIcon, ShoppingCart } from "lucide-react"
import { Input } from "../ui/input"
import { useAppSelector } from '../../redux/hooks'
export default function Component() {
    const carts = useAppSelector((state) => state.cartSlice)
    const { totalQuantity } = carts
    return (
        <header className=" p-4 flex justify-between items-center h-20 border-b-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
                        <SearchIcon className="h-4 w-4 mr-2.5" />
                        <Input type="search" placeholder="Search..." className="w-full border-0" />
                    </div>
                    <div className="">
                        <Button className="bg-white border-2 border-orange-400 hover:bg-gray-50">Login</Button>
                        <Button className="bg-orange-400 hover:bg-orange-300">Sign Up</Button>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="w-full flex items-center justify-between">
                <Link href="#" className="border-b-4 border-[var(--primary-color)] flex text-[var(--primary-color)]" prefetch={false}>
                    <HandPlatter className="h-10 w-10 text-" />
                    <span className=" text-2xl font-semibold">Foodie</span>
                </Link>
                <div className="  max-md:hidden w-1/4">
                    <Input type="search" placeholder="Search..." className="bg-gray-100 border-2" />
                </div>
                <div className="max-md:hidden flex gap-2">
                    <Link href='/cart' className="flex items-center" >
                        <ShoppingCart className="text-[var(--primary-color)] w-full" />
                        {
                            totalQuantity && <span className="bg-[var(--primary-color)] text-black rounded-full w-10 text-sm p-1 text-center ">{totalQuantity}</span>
                        }
                    </Link>
                    <Button className="bg-white border-2 text-black border-[var(--primary-color)] hover:bg-gray-50">Login</Button>
                    <Button className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]">Sign Up</Button>
                </div>
            </div>
        </header>
    )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}



function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}