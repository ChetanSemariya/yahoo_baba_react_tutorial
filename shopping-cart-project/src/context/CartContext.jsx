import { createContext, useContext, useState } from "react";

// Initialize Context
const cartContext = createContext();

// Use Provider for context
export const CartProvider = ({children}) => { // poora browse router provider mai send hojayga
    const [cart, setCart] = useState([]);

    // Add Product (addToCart)
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if(existing){ // cart mai phle se add hai yaa nahi
                return prev.map((item) => item.id === product.id ? {...item, qty:item.qty + 1} : item) // agar item phle se hai or user uspe click krta hai to 1 ka addition kara denge or nahi to as it is.
            }

            return [...prev, {...product, qty:1}] // first time add karega to quantity 1 rahegi
        })
    }

    // Remove Product
    const removeFormCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    // Update Quantity
    const updateQty = (id, qty) => {
        setCart((prev) => 
            prev.map((item) => (item.id === id ? {...item, qty} : item)) // new item aaye to update hojaye quantity otherwise same show hogi
        )
    }

    // Total Price
    const total = cart.reduce((prev,item) => prev + (item.price * item.qty), 0);

    return (
        <cartContext.Provider value={{cart, addToCart, removeFormCart, updateQty, total}}>
            {children}
        </cartContext.Provider>
    )
}

// consume cartContext with Custom Hook
export const useCart = () => useContext(cartContext)