import { LucideIcon } from "lucide-react"

export interface DefaultPageProps { }

export type radioItem = {
    value: string,
    name: string
}
export type checkboxItem = {
    value: string,
    name: string
}

export interface ProductInt {
    id: number,
    name: string,
    image: string,
    category: string,
    price: string,
    rating: string
}
export type ProductType = {
    id: number,
    name: string,
    image: string,
    category: string,
    price: string,
    rating: string
}


export type smallScreencheckboxItem = {
    title: string,
    optionList: checkboxItem[]
}


export type catalogItemtype = {
    name: string,
    href: string,
    icon: LucideIcon
}