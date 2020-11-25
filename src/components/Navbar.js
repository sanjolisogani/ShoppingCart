import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component{
    render(){
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
                
                <Link to ="/cart">
                <button className="btn btn-dark btn-outline-secondary ml-auto">MY CART</button>
                </Link>
               </nav>
               
               
            </div>
        )
    }
}