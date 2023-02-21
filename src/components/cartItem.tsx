import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopCartContext";
import storeItems from '../services/items.json';
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
}

type StoreItem = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

const CartItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    if (item === null) return;

    return (
        <Stack direction="horizontal" gap={2}>
            <img src={item?.imgUrl} style={{ width: "125px", height: '75px', objectFit: 'cover'}} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize: ".65rem"}}>X{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: "..75rem"}}>
                    {formatCurrency(item?.price)}
                </div>
            </div>
            <div>{formatCurrency(item?.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                &times;
            </Button>
        </Stack>
    );
}
 
export default CartItem;