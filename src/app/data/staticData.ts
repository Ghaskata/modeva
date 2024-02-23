import { Cat, Filter, Grid, GridIcon, Moon, Orbit, User, User2 } from "lucide-react"
import { ProductInt, catalogItemtype } from "../type"

export const NavLinkList = [
    {
        name: "products",
        href: "/products",
    },
    {
        name: "new",
        href: "/new",
    },
    {
        name: "brands",
        href: "/brands",
    },

]

export const ColorList = [
    {
        value: "black",
        name: "black color"
    },
    {
        value: "green",
        name: "green color"
    },
    {
        value: "yellow",
        name: "yellow color"
    },
    {
        value: "blue",
        name: "blue color"
    },
    {
        value: "white",
        name: "white color"
    },
    {
        value: "gray",
        name: "Gray Color"
    }
]
export const DiscountList = [
    {
        value: "10%",
        name: "10% and above"
    },
    {
        value: "20%",
        name: "20% and above"
    },
    {
        value: "30%",
        name: "30% and above"
    },
    {
        value: "40%",
        name: "40% and above"
    },
    {
        value: "50%",
        name: "50% and above"
    },
    {
        value: "60%",
        name: "60% and above"
    },
    {
        value: "70%",
        name: "70% and above"
    },
    {
        value: "80%",
        name: "80% and above"
    },
    {
        value: "90%",
        name: "90% and above"
    }
]


export const brandList = [
    {
        value: "rodester",
        name: "Rodestor"
    },
    {
        value: "friskers",
        name: "Friskers"
    },
    {
        value: "gucchi",
        name: "Gucchiii"
    },
    {
        value: "wrong",
        name: "WRONG"
    },
    {
        value: "hrx",
        name: "HRX"
    },
    {
        value: "nike",
        name: "Nike"
    },
    {
        value: "bandhani",
        name: "Bandhni"
    },
    {
        value: "western",
        name: "Western"
    }
]

export const productData: ProductInt[] = [
    {
        id: 1,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 2,
        name: "Product Name",
        image: "/images/product2.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 3,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 4,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 5,
        name: "Product Name",
        image: "/images/product2.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 6,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 7,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 8,
        name: "Product Name",
        image: "/images/product2.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 9,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 10,
        name: "Product Name",
        image: "/images/product2.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 11,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 12,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 13,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 14,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 15,
        name: "Product Name",
        image: "/images/product1.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
    {
        id: 16,
        name: "Product Name",
        image: "/images/product3.png",
        category: "Product Category",
        price: 'IDR xxx',
        rating: '4.5'
    },
]

export const brandFilter = {
    title: "Brand Name",
    optionList: [
        {
            value: "rodester",
            name: "Rodestor"
        },
        {
            value: "friskers",
            name: "Friskers"
        },
        {
            value: "gucchi",
            name: "Gucchiii"
        },
        {
            value: "wrong",
            name: "WRONG"
        },
        {
            value: "hrx",
            name: "HRX"
        },
        {
            value: "nike",
            name: "Nike"
        },
        {
            value: "bandhani",
            name: "Bandhni"
        },
        {
            value: "western",
            name: "Western"
        }
    ]
}


export const discountFilter = {
    title: "Discounts",
    optionList: [
        {
            value: "10%",
            name: "10% and above"
        },
        {
            value: "20%",
            name: "20% and above"
        },
        {
            value: "30%",
            name: "30% and above"
        },
        {
            value: "40%",
            name: "40% and above"
        },
        {
            value: "50%",
            name: "50% and above"
        },
        {
            value: "60%",
            name: "60% and above"
        },
        {
            value: "70%",
            name: "70% and above"
        },
        {
            value: "80%",
            name: "80% and above"
        },
        {
            value: "90%",
            name: "90% and above"
        }
    ]
}

export const jeansFilter = {
    title: "Jeans",
    optionList: [
        {
            value: "10%",
            name: "10% and above"
        },
        {
            value: "20%",
            name: "20% and above"
        },
        {
            value: "30%",
            name: "30% and above"
        },
        {
            value: "40%",
            name: "40% and above"
        },
        {
            value: "50%",
            name: "50% and above"
        },
        {
            value: "60%",
            name: "60% and above"
        },
        {
            value: "70%",
            name: "70% and above"
        },
        {
            value: "80%",
            name: "80% and above"
        },
        {
            value: "90%",
            name: "90% and above"
        }
    ]
}


export const catalogData: catalogItemtype[] = [
    {
        name: "Cusal wear",
        href: "/products?category=cusal",
        icon: Cat
    },
    {
        name: "fancy waer",
        href: "/products?category=fancy",
        icon: Moon
    },
    {
        name: "Women wear",
        href: "/products?category=women",
        icon: Grid
    },
    {
        name: "stylist",
        href: "/products?category=stylist",
        icon: Filter
    },
    {
        name: "Mens wear",
        href: "/products?category=men",
        icon:User
    },
    {
        name: "Studio",
        href: "/products?category=studio",
        icon:Cat
    },
    {
        name: "Make Up",
        href: "/products?category=makeup",
        icon:Orbit
    },
    {
        name: "Jewellary",
        href: "/products?category=jewellary",
        icon:Cat
    },
    {
        name: "Jeans",
        href: "/products?category=jeans",
        icon:Cat
    },
    {
        name: "Kurta",
        href: "/products?category=Kurta",
        icon:User2
    },
    {
        name: "kids Wear",
        href: "/products?category=kids",
        icon:Cat
    },
    
]


export const colors = ["blue", "red", "yellow", "brown", "green", "orange", "black"]