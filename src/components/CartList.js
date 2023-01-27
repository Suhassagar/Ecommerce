import { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';
import './CartList.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (       
            <div className='new'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div><br/>
                            <img src={cartItem.url} width={90} />
                            <span> {cartItem.name} </span>
                            <br/>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            ><b>-</b></button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            ><b>+</b></button>
                            <span> Rs. {cartItem.price * cartItem.quantity}</span>
                        </div>
                    )
                })
            }

            <p> <b>Total : &nbsp;</b>
               <span style={{
                color: "black",
                textDecoration: "underline"}}> 
                <span>
                {
                   CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
                </span>
                <br/>
                <button id='buynow'>Buy Now</button>
                </span>
            </p>
        </div >
        
    )
}

export default CartList