import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function Nav() {
    const cart=useSelector((state)=> {
        return state.cart.length
       })

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                </li>

            </ul>

        </div>
            <div className="float-right ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                         <Link  className="nav-link" to="/cart"><i style={{fontSize:"20px",marginRight:"3px",marginTop:"7px"}} className="fas fa-cart-plus"></i>Cart(<span  style={{color:"white",fontWeight:"bold"}}>{cart}</span>)</Link>
                    </li>
                </ul>

            </div>
        </div>
</nav>
</div>
  );
}
