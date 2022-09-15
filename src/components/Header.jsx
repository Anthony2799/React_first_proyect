import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import MyOrder from './../container/MyOrder';
import Menu from './Menu';
import AppContext from '../context/AppContext';

// const menu = '@incons/icon_menu.svg';
// const logo = '@logos/logo_yard_sale.svg';
// const shoppingCart = '@icon/icon_shoppingCart.svg';
const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);

    }

    return (
        <nav>
            <img src="menu" alt="menu" className="menu" />

            <div className="navbar-left">
                <img src="logo" alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li
                        className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>

                        <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}

        </nav>
    )
}

export default Header;