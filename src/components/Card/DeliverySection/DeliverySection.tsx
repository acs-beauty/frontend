import React from "react"
import CreditCardIcon from "@/Images/CreditCardIcon"
import DeliveryIcon from "@/Images/DeliveryIcon"
import {
    
    DeliveryContainer,
    LinkDelivery,
    Span, 
  } from "./DeliverySection.styled"

const DeliverySection =() => {

    return(
        <DeliveryContainer>
          <LinkDelivery>
            <DeliveryIcon /> 
            <Span>
            Умови доставки
            </Span>
            
          </LinkDelivery>
          <LinkDelivery>
            <CreditCardIcon /> 
            <Span>
            Умови оплати
            </Span>           
          </LinkDelivery>
        </DeliveryContainer>
    )
}

export default DeliverySection