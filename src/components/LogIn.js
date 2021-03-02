import React, {useState} from 'react'
import {Button} from '@material-ui/core/';
import {auth} from "./FirebaseConfig";
import {useHistory} from "react-router-dom"

export default function LogIn(){
    const history = useHistory();
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push("/")
            }
        })
        .catch(error => alert(error.message))
    }

    return(
        <div className="Login">
            <div className="logo logo-form">
                <h1>Leafy</h1>
            </div>

            <div className="LoginContainer">
                <h2>Ingresar</h2>

                <form>
                    <h5 className="label-form">E-mail</h5>
                    <input type="email" className="input-form" value={email} onChange={e => SetEmail(e.target.value)}/>

                    <h5 className="label-form">Contraseña</h5>
                    <input type="password" className="input-form margin-b" value={password} onChange={e => SetPassword(e.target.value)}/>

                    <div className="btn-form-wrap">
                    <Button variant="contained" size="large" color="primary" className="btn-form" type="submit" onClick={signIn}>Iniciar Sesión</Button>

                    <small className="small-form">¿No tenés una cuenta?</small>
                    <Button variant="outlined" color="primary" className="btn-form" onClick={register}>Registrate</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}