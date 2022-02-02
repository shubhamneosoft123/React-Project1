import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function CartDetails() {

  const cart=useSelector((state)=> {
    return state.cart.length
   })
  const [cdata,setData] =useState([]);
  const [grandtotal,setGrandTotal]=useState([])
  
    useEffect(() => {
       
        if(localStorage.getItem('mycart')!=undefined){
          const Items = JSON.parse(localStorage.getItem('mycart'));
          setData(Items)
        
        } 
        setGrandTotal(total)
      }, [grandtotal]);
 
      // Total of added products in cart
      const total = cdata.reduce((accumulator,current) => accumulator + current.price * current.quantity, 0)
      
    
      
     
  return <>
    <section className="pt-5 pb-5">
  <div className="container">
    <div className="row w-100">
        <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">{cart}</i> items in your cart</p>
            <table id="shoppingCart" className="table table-condensed table-responsive">
                <thead>
                    <tr>
                        <th style={{width:"60%"}}>Product</th>
                        <th style={{width:"12%"}}>Price</th>
                        <th style={{width:"10%"}}>Quantity</th>
                        <th style={{width:"16%"}}></th>
                    </tr>
                </thead>
                <tbody>
                {cdata.map((pro,index)=>
                    <tr key={index}>
                        <td data-th="Product" key={pro.id}>
                            <div className="row">
                                <div className="col-md-3 text-left">
                                    <img src={pro.image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                                </div>
                                <div className="col-md-9 text-left mt-sm-2">
                                    <a href=''><h4>{pro.pname}</h4></a>
                                    <p className="font-weight-light">Id:{pro.pid}</p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price">₹ {pro.price}</td>
                        <td data-th="Quantity">
                            <input type="number" className="form-control form-control-lg text-center" value={pro.quantity} />
                        </td>
                        <td className="actions" data-th="">
                            <div className="text-right">
                            
                                {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                    <i className="fas fa-trash"></i>
                                </button> */}
                            </div>
                        </td>
                    </tr>
                )}  
                </tbody>
            </table>
            <div className="float-end mr-5 text-right">
                <h4>Subtotal:</h4>
                <h1>{grandtotal}.00</h1>
            </div>
        </div>
    </div>
    <div className="row mt-2 mx-5 d-flex float-end">
        <div className="col-sm-6 order-md-2 text-right">
            <Link to="/checkout" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</Link>
        </div>
       
    </div>
        
</div>
<div className=" float-start">
            <Link to="/products">
                <i className="fas fa-arrow-left mr-2"></i> Continue Shopping</Link>
        </div>
</section>

  </>;
}
