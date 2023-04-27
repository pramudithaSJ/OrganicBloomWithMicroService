import React from 'react'
import './SellerSideNav.css'

function SellerSideNav() {

    const Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };
  return (
    <div>
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Seller Dashboard</h3>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <a href="/viewproducts">Products</a>
                   

                </li>
                <li>
                    <a>
                        <button onClick={Logout}>Logout</button>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SellerSideNav
