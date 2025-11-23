import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Cargar desde localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart"));
        if (saved) setCart(saved);
    }, []);

    // Guardar en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // 🔥 AGREGAR CON CANTIDAD REAL
    const addToCart = (product) => {
        const exists = cart.find(
            (item) => item.productoId === product.productoId
        );

        if (exists) {
            // SUMA LA CANTIDAD REAL SELECCIONADA
            setCart(
                cart.map((item) =>
                    item.productoId === product.productoId
                        ? { ...item, cantidad: item.cantidad + product.cantidad }
                        : item
                )
            );
        } else {
            // AGREGA EL PRODUCTO CON SU CANTIDAD REAL
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    // 🔼 AUMENTAR UNA UNIDAD
    const increase = (id) => {
        setCart(
            cart.map((item) =>
                item.productoId === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    // 🔽 DISMINUIR UNA UNIDAD (mínimo 1)
    const decrease = (id) => {
        setCart(
            cart.map((item) =>
                item.productoId === id && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    // ❌ ELIMINAR PRODUCTO
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.productoId !== id));
    };

    // 🧹 VACIAR CARRITO
    const clearCart = () => setCart([]);

    // 🔔 ABRIR / CERRAR SIDEBAR DEL CARRITO
    const toggleCart = () => setIsOpen((prev) => !prev);

    // 🔢 TOTAL DE PRODUCTOS (sumatoria de cantidades)
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

    // 💲 TOTAL A PAGAR
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
