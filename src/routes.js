import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewOrder from './pages/neworder';
import Home from './pages/home';
import OptionsAdd from './pages/optionsadd';
import SelectMethod from './pages/selectmethod';
import OrderSucess from './pages/ordersucess';
import CreditCardPayment from './pages/creditcardpayment';
import Login from './pages/login';
import Register from './pages/register';
import Promo from './pages/promo';
import OrderList from './pages/orderlist';
import MoneyPayment from './pages/moneypayment';
import Cart from './pages/cart';
import PromoCode from './pages/promocode';
import CheckOrder from './pages/checkOrder';
import MoneyPaymentCart from './pages/moneypaymentcart';

const Appstack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Appstack.Navigator screenOptions={{headerShown: false}} >
                <Appstack.Screen name="Login" component={Login} />
                <Appstack.Screen name="Register" component={Register} />
                <Appstack.Screen name="Cart" component={Cart} />
                <Appstack.Screen name="Home" component={Home} />
                <Appstack.Screen name="OrderList" component={OrderList} />
                <Appstack.Screen name="NewOrder" component={NewOrder} />
                <Appstack.Screen name="Promo" component={Promo} />
                <Appstack.Screen name="PromoCode" component={PromoCode} />
                <Appstack.Screen name="CheckOrder" component={CheckOrder} />
                <Appstack.Screen name="OptionsAdd" component={OptionsAdd} />
                <Appstack.Screen name="SelectMethod" component={SelectMethod} />
                <Appstack.Screen name="OrderSucess" component={OrderSucess} />
                <Appstack.Screen name="CreditCardPayment" component={CreditCardPayment} />
                <Appstack.Screen name="MoneyPayment" component={MoneyPayment} />
                <Appstack.Screen name="MoneyPaymentCart" component={MoneyPaymentCart} />
                </Appstack.Navigator>
        </NavigationContainer>
    )
}