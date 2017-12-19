import React from "react";
import StripeCheckout from 'react-stripe-checkout';


onToken =  (token) => {
      Meteor.call(
          'StripeChargeMethod',
          token, 
          //all arguments be
          //amount, 
          //arg 2,
          (err,data)=>{ 
             if(err){
             //as always place a debugger here so that you can see what the error is
                this.handleError(err)
             }else if(data){
             //debugger to check the data
                if(data.status == "succeeded"){
                  this.handleSuccess(data)
            }else if(data.type =='StripeInvalidRequestError'){
                  this.handleError(data)
             }
            }
          }
      )

  }


  render() {

    return (
      <div>
      <StripeCheckout
        token       =  {this.onToken}
        stripeKey   =  "pk_test_1A3bozgEDEjkmI5h3J9Nf86l"
        amount      =  {this.props.amount}
        email       =  {this.props.email}
      />
      </div>
    )
  }
}


