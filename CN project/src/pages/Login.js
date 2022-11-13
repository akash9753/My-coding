import styles from '../styles/login.module.css'
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from '../hooks';
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggingIn, setLoggingIn] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    console.log("Auth------",auth)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoggingIn(true);
        if(!email || !password){
            return toast.warning("please enter both email and passowrd")
        }
        console.log(email);
        console.log(password);
        const response = await auth.login(email,password)
        if(response.success){
             navigate('/')
             toast.success(response.message)
        }else{
             toast.warning(response.message)
        }
        setLoggingIn(false);
    }

    return (
        <div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>
        <div className={styles.field}>
          <input type="email" placeholder='Email'  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className={styles.field}>
          <input type="password" placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className={styles.field} >
          <button disabled={loggingIn}> {loggingIn ? 'Logging in...' : 'Log In'}</button>
        </div>
    </form>
    <ToastContainer />
    </div>
    ) 
    
}
export default Login;