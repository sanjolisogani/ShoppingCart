import React,{Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartTotals from './CartTotals';
import CartList from './CartList';

export default class Cart extends Component{
    render(){
        return(
            <section>
            <ProductConsumer>
                {value =>{
                    const {cart}=value;
                    if (cart.length>0){
                        return (
                            <div>
                            <center><h5>YOUR CART</h5></center> 
                            <CartColumns></CartColumns> 
                            <CartList value ={value}/>
                            <CartTotals value={value}/>
                            </div>
                            
                        )
                    }
                    else{
                        return(
                            <div>
                            <EmptyCart/>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
             
            
            
            </section>
        )
    }
} 