import React from 'react';
export default function CartItem({item,value}){
    const{id,title,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return(
       <div className="row my-1 text-capitalize text-center">
           <div className = "col-10 mx-auto col-lg-2">
                Image
           </div>
           <div className = "col-10 mx-auto col-lg-2">
                <span className = "d-lg-none">
                Product :
                </span>
                {title}
           </div>
           <div className = "col-10 mx-auto col-lg-2">
           <span className = "d-lg-none">
                Price :
                </span>
                {price}
           </div>
           <div className = "col-10 mx-auto col-lg-2">
           <div>
                        <span className="btn btn-dark mx-1" onClick={()=>decrement(id)}> -

                        </span>
                        <span className="btn btn-dark mx-1">{count}</span>

                        <span className="btn btn-dark mx-1" onClick={()=>increment(id)}> +

</span>
                    </div>
           </div>
           <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
           <span className="btn btn-dark mx-1" onClick={()=>removeItem(id)}> x

</span>
           </div>
           <div className = "col-10 mx-auto col-lg-2">
           <strong> Item Total : Rs {total}</strong>
            
           </div>
       </div>
    )
}