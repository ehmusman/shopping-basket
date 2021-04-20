import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    { name: "we qwer twert ", price: 12, quantity: 23, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias possimus deleniti porro delectus enim. Similique deserunt recusandae officia debitis, odio aspernatur quibusdam ipsa quas ab rerum adipisci, dolores deleniti? Ullam.", id: 1, image: "https://res.cloudinary.com/ehmusman/image/upload/v1618811931/shopping%20basket/71UjTWGVC3L._UL1100__jddx0w.jpg" },
    { name: "we qwer twert ", price: 22, quantity: 13, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias possimus deleniti porro delectus enim. Similique deserunt recusandae officia debitis, odio aspernatur quibusdam ipsa quas ab rerum adipisci, dolores deleniti? Ullam.", id: 2, image: "https://res.cloudinary.com/ehmusman/image/upload/v1618811901/shopping%20basket/61NtUo0zFeL._UL1200__xym5v3.jpg" },
    { name: "we qwer twert ", price: 32, quantity: 21, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias possimus deleniti porro delectus enim. Similique deserunt recusandae officia debitis, odio aspernatur quibusdam ipsa quas ab rerum adipisci, dolores deleniti? Ullam.", id: 3, image: "https://res.cloudinary.com/ehmusman/image/upload/v1618811891/shopping%20basket/71UyWHLV7tL._UL1500__h8lev6.jpg" },
    { name: "we qwer twert ", price: 10, quantity: 11, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias possimus deleniti porro delectus enim. Similique deserunt recusandae officia debitis, odio aspernatur quibusdam ipsa quas ab rerum adipisci, dolores deleniti? Ullam.", id: 4, image: "https://res.cloudinary.com/ehmusman/image/upload/v1618811877/shopping%20basket/714sP8ABD-L._UL1500__hhtoza.jpg" }
]
const slice = createSlice({
    name: "products",
    initialState: {
        list: initialState,
        product: null,
        cart: []
    },
    reducers: {
        getProductDetail: (products, action) => {
            const product = products.list.find(i => i.id === Number(action.payload))
            products.product = product
        },
        addToCart: (products, action) => {
            products.cart.push(action.payload)
        },
        changeCartCount: (products, action) => {
            const { id, value } = action.payload
            const product = products.cart.find(i => i.id === Number(id))
            product.count = value
            product.totalPrice = value * product.price
        },
        removeItemFromCart: (products, action) => {
            const index = products.cart.findIndex(i => i.id === action.payload)
            products.cart.splice(index, 1)
        }
    }
})

export default slice.reducer


// Actions
export const { getProductDetail, addToCart, changeCartCount, removeItemFromCart } = slice.actions
