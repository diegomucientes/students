import React from 'react';
import logout from '../actions/Logout';
import { useUser } from '../contexts/userContext';
import '../styles/Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";

const Header = () => {
    const {user,setUser}=useUser();
    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert('Error, could not log out')
        
    }
    const renderHeader=()=>{
        if(user){
            return(
                <div className="wrapper">

                <h1>Bienvenid@ Profes@r  {user.firstName}</h1>
                <h1>Administrador de Alumnos con Condiciones Especiales </h1> 
                <h4>
                    <button type="button" className="btn btn-info m-1"onClick={logOut}>Cerrar Sesión</button>
                    <Link to={'/students'}> <button type="button" className="btn btn-info m-1"> Mis Estudiantes</button></Link>
                </h4>
                <br></br>
                <main>
                    <img className="foto" src="https://admision.iploslagos.cl/wp-content/uploads/elementor/thumbs/tecnico-en-educacion-diferencial-3-ip-los-lagos-oevtrkd38bglh1yxbmqdtx7mki5r7s6ob5b1g9ucv4.jpg"alt="teacher1"></img>  
                    <img className="foto1" src="https://www.ipchile.cl/wp-content/uploads/2018/09/T%C3%A9cnico-de-Nivel-Superior-en-Educaci%C3%B3n-B%C3%A1sica-01.jpg"alt="teacher2"></img>
                    <img className="foto2" src="https://www.acnur.org/thumb1/5e8711324.jpg"alt="teacher"></img>
                    <img  className="foto3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKh-7n2fGhevXiRDXo781H35-G701bh8_DA&usqp=CAU"alt="teacher3"></img>
                    <img className="foto4" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/9541/production/_111690283_whatsubject.jpg"alt="teacher4"></img>
                    <img className="foto5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlgVOJrAYQHS-raTHrnqTEH9gU9QJduA8BQ&usqp=CAU"alt="teacher5"></img>
                </main>
                <br></br>
                

                </div>
            )

        }
        else{
            return(

            <>
            <Link  to={'/'}><button type="button" className="btn btn-info m-1">Login</button></Link>
            <Link  to={'/register'}><button type="button" className="btn btn-info m-1">Register</button></Link>
            <h1>Alumnos con Necesidades Especiales</h1>  
             <main>
                    <img className="foto" src="https://admision.iploslagos.cl/wp-content/uploads/elementor/thumbs/tecnico-en-educacion-diferencial-3-ip-los-lagos-oevtrkd38bglh1yxbmqdtx7mki5r7s6ob5b1g9ucv4.jpg"alt="teacher1"></img>  
                    <img className="foto1" src="https://www.ipchile.cl/wp-content/uploads/2018/09/T%C3%A9cnico-de-Nivel-Superior-en-Educaci%C3%B3n-B%C3%A1sica-01.jpg"alt="teacher2"></img>
                    <img className="foto2" src="https://www.acnur.org/thumb1/5e8711324.jpg"alt="teacher"></img>
                    <img  className="foto3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKh-7n2fGhevXiRDXo781H35-G701bh8_DA&usqp=CAU"alt="teacher3"></img>
                    <img className="foto4" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/9541/production/_111690283_whatsubject.jpg"alt="teacher4"></img>
                    <img className="foto5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlgVOJrAYQHS-raTHrnqTEH9gU9QJduA8BQ&usqp=CAU"alt="teacher5"></img>
            </main>
                
                
            </>)
        }
    }
    return (
        <div>
            {renderHeader()}
           
            
        </div>
    );
}

export default Header;
