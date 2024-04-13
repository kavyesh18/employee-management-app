import React from "react";
import { useNavigate } from "react-router";
import { FaLinkedin, FaInstagram,FaEnvelope } from 'react-icons/fa';

const Home = (props) => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    };

    const signup = () => {
        navigate("/signup");
    };

    const logout = () => {
        navigate("/logout");
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-5 left-column">
                    <ul className="list-group">
                        <li className="list-group-item">Name: B.Kavyesh Raj</li>
                        <li className="list-group-item">Mobile: 6302338052</li>
                        <li className="list-group-item">Mail: Kavyesh.Badugu@gmail.com</li>

                        <a href="https://www.linkedin.com/in/badugu-kavyesh-raj-263697246/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaLinkedin className="icon linkedin-icon" />
                        </a>
                        <a href="https://www.instagram.com/kavyesh_raj/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaInstagram className="icon instagram-icon" />
                        </a>
                        
                        <a href="mailto:your-Kavyesh.Badugu@gmail.com" className="icon-link">
                            <FaEnvelope className="icon gmail-icon" />
                        </a>
                        
                    </ul>
                </div>
                <div className="col-md-4 right-column">                 
                    <img src={require('./IMG_20230918_132406.jpg')} alt="My-Image" className="img-thumbnail"/>

                    <form className="form-group">
                       
                        {props.isLoggedIn ? (
                            <button className="btn btn-success" onClick={logout}>Logout</button>
                        ) : (
                            <>
                                <button className="btn btn-primary" type="button" onClick={login}>Login</button>
                                <button className="btn btn-primary" type="button" onClick={signup}>Signup</button>
                            </>
                        )}
                    </form>
                </div>

                
                
            </div>
            
        </div>
    );
};

export default Home;
