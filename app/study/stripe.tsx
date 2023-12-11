import { Button } from '@rneui/base';
import {useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';

export default function CheckoutScreen() {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await axios.post(
      'http://192.168.2.4:3000/payments/intents',
      {amount: 1000},
    );
    // console.log('+_+_+');
    if (response.data.error) {
      console.log('Something went wrong');
      return;
    }

    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: 'notJust.dev',
      paymentIntentClientSecret: response.data.paymentIntent,
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      console.log('Something went wrong');
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      console.log(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message,
      );
      return;
    }

    console.log('Success');

    // 4. If payment ok -> create the order
    // onCreateOrder();
  };

  return <Button title="Checkout" onPress={onCheckout} />;
}
