import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart"));
        if (saved) setCart(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const exists = cart.find(
            (item) => item.productoId === product.productoId
        );

        if (exists) {
            setCart(
                cart.map((item) =>
                    item.productoId === product.productoId
                        ? { ...item, cantidad: item.cantidad + product.cantidad }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    const increase = (id) => {
        setCart(
            cart.map((item) =>
                item.productoId === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const decrease = (id) => {
        setCart(
            cart.map((item) =>
                item.productoId === id && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.productoId !== id));
    };

    const clearCart = () => setCart([]);
    const toggleCart = () => setIsOpen((prev) => !prev);
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.cantidad * item.precio,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increase,
                decrease,
                removeFromCart,
                clearCart,
                isOpen,
                toggleCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
