import React from 'react'
import './SideNav.css'

function SideNav() {

    const Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };
  return (
    <div>
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <a href="/orders">Orders</a>
                   

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

export default SideNav
