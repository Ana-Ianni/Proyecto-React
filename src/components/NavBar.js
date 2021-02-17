import React from 'react'
import './style.css';
import { Link, NavLink } from "react-router-dom";
import {useStateValue} from "./CartContext";
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';

const NavBar = function(){
    const [{cart}, dispatch] = useStateValue();
    return(
        <>
        <header className="nav">
            <div className="logo">
                <h1>Leafy</h1>
            </div>
            <div className="links-nav--wrap">
                <ul className="links-nav">
                    <li><NavLink to="/" exact className="link-nav">Home</NavLink></li>
                    <li><NavLink to="/Catalogo" className="link-nav">Catálogo</NavLink></li>
                    <Link to="/Carrito">
                        <IconButton>
                            <Badge badgeContent={cart?.length} color="secondary">
                            <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </IconButton>
                    </Link>
                </ul>
            </div>
        </header>
        </>
    );
}

export default NavBar