

import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import CheckoutForm from "../Website/CheckoutForm";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51OGQ5sJlCMJqHMZePfpmiwsr8SeKyd6N8UOZobwBGPY0cHqUG9MvtOOlEUlTdxZfKhpNb7lyzO7BXVDwcifRLBoi006lDxNQEH');
const Payment = () => {
  const location = useLocation()
  const { price } = location.state


  useEffect(() => {
    console.log("location in payment page ",price);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
    {/* <img
      src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
      alt="laptop"
      style={{ width: "50px", height: "50px" }}
    /> */}


    <div>
      
       
    <Elements stripe={stripePromise}>
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <CheckoutForm stripe={stripe} elements={elements} price={price} />
    )}
  </ElementsConsumer>
</Elements>

    </div>
  </div>
  )
}

export default Payment