import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
export default class Modal extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                   
                    if(!modalOpen){
                        return null;
                    }
                    else{
                      return(   <div className="container">
                             <div className="row">
                                 <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                     <h5>
                                         item added to cart</h5>
                                         
                                     <Link to="/">
                                         <button onClick={()=>closeModal()} >
                                              Continue Shopping
                                         </button>
                                     </Link>
                                     <Link to="/cart" onClick={()=>closeModal()}>
                                         <button >
                                              Go To Cart
                                         </button>
                                     </Link>
                                 </div>
                             </div>
                         </div>)
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}