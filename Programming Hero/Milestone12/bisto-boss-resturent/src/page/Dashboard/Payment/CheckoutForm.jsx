import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const element = useElements();
  const [] = useAxious
  const [cardError, setCardError] = useState(' ')



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || element) {
      return
    }
    const card = element.getElement(CardElement)
    if (card == null) {
      return
    }
    // console.log("card", card)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    if (error) {
      console.log("error", error)
      setCardError(error.message)
    }
    else {
      setCardError('')
      console.log("payment method", paymentMethod)
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-primary btn-sm' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-400'>{cardError}</p>
      }
    </>
  )
}

export default CheckoutForm