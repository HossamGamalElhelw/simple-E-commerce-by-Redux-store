import React,{useState,useEffect,useRef, useContext} from 'react'
import axios from 'axios'
import './Login.css'

import { UsersContext } from './usersContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UsersContext);
    const userNameInput = useRef(null);
    const passwordInput = useRef(null);
    
    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate('/Home');
        }
    },[])

    const handleLogin = async(e) => {
        e.preventDefault();
        setError(null);

        const username = userNameInput.current.value;
        const password = passwordInput.current.value;

        if(!username || ! password){
            alert("please enter both username and password");
            return;
        }
        try{
            const response = await axios.post("https://dummyjson.com/auth/login",{
                username , password
            });
            const userData = response.data;
            // Save token &  user
            localStorage.setItem("token",userData.token);
            localStorage.setItem("user",JSON.stringify(userData));

            setUser(userData);
            navigate('/Home');
            window.location.reload()
        }catch(error){
            console.error("login failded : ", error);
            setError("Invalid username or password.");
        }
    };

  return (
    <div className="login">
        <div className='content_login'>
            <h1 className='title_login'>Login</h1>
            <form className='login_form'>
                <label>
                    Username
                    <input ref={userNameInput} type="text" placeholder='Enter your username' />
                </label>
                <label>
                    Password
                    <input ref={passwordInput} type="password" placeholder='Enter your password' />
                </label>
                <button onClick={handleLogin} className='btn_sign' type='submit'>Sign In</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    </div>
  )
}

export default Login


