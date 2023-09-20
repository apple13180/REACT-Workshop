//สร้าง context api => ให้ข้อมูลแก่ component ใน App
import { createContext, useContext, useReducer } from 'react'
import CartData from '../data/CartData'
import reducer from './reducer'

const initState = {
    cart:CartData,
    total:0,
    amount:0
}
const CartContext = createContext()

export const MyCartContext=()=>{
    return useContext(CartContext)
}

const CartProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <CartContext.Provider value={{...state}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}