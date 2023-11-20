import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
// import useCart from '../../../hooks/cartMenu'

// todo : provide publishable key
const stripePromise = loadStripe(`import.meta.env.VITE_Payment_Cateway_PK`)
const Payment = () => {
    const [carts] = useCart();
    const total = carts.reduce((sum,item)=>sum+item.price,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className='text-3xl'>Tk tume uria uria aso</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={total}>

                </CheckoutForm>
            </Elements>
        </div>
    )
}

export default Payment 