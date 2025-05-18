import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import './Login.css'

function Login() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const userNameInput = useRef(null);
    const passwordInput = useRef(null);
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await fetch('https://dummyjson.com/users');
                const result = await response.json();
                setData(result.users);
                setLoading(false);
            }catch(error){
                console.error('error in this line',error);
                setLoading(false);
            }
        }
        fetchData();
    },[])
    
    useEffect(()=>{
        console.log(passwordInput.current.value);
    },[passwordInput.current])
  const handelOnClick = (e) =>{
    e.preventDefault(); 
    const username = userNameInput.current.value;
    const password = passwordInput.current.value;

    if(!password || !username) {
        alert("Please enter both username and password!")
        return;
    }
    const user = data.find((user)=> user.username === username && user.password === password);
    if (user) {        
        localStorage.setItem(`user`,user.username);
        localStorage.setItem('loggedIn',JSON.stringify(true));
        setIsLoggedIn(true);
        window.location.href=  '/Home';
        alert('Successful login!');
    } else {
        setIsLoggedIn(false);
        alert('Invalid username or password.');
    }
  }
  
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
                <button onClick={handelOnClick} className='btn_sign' type='submit'>Sign In</button>
            </form>
            {loading && <p>Loadding ....</p>}
        </div>
    </div>
  )
}

export default Login