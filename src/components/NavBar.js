import React from 'react'
import './style.css';
import { Link, NavLink } from "react-router-dom";
import {useStateValue} from "./CartContext";
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import {auth} from "./FirebaseConfig"

const NavBar = function(){
    const [{cart, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return(
        <>
        <header className="nav">
            <NavLink to="/" exact className="link-nav">
            <div className="logo">
                <h1>Leafy</h1>
            </div>
            </NavLink>
            <div className="links-nav--wrap">
                <ul className="links-nav">
                    <div className="link-user">
                        <span>¡Hola {!user ? "invitado!" : user.email}</span>
                        <NavLink to={!user && "/Login"} className="link-nav" onClick={handleAuthenticaton}>{user ? "Cerrar Sesión" : "Ingresar"}</NavLink>
                    </div>
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

/*  <Link to="/Login">
        <IconButton>
            <AccountCircleOutlinedIcon/>
        </IconButton>
    </Link> 
    
    <li><NavLink to="/Catalogo" className="link-nav">Catálogo</NavLink></li>*/