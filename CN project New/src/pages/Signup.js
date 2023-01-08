import { useState } from 'react';
import styles from '../styles/login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../providers/AuthProvider";
const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [signingUp, setSigningup] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    console.log("Auth------", auth)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSigningup(true);
        
        let error = false;
        if (!name || !email || !password || !confirmPassword) {
            toast.warning("please fill all the fields")
            error = true;
        }

        if (password !== confirmPassword) {
            toast.warning("passwrod and confirm password must be same")
            error = true;
        }

        if (error) {
            return setSigningup(false)
        }
        console.log(name, email, password, confirmPassword);
        const response = await auth.signup(name, email, password, confirmPassword)
        console.log(response);
        if (response.success) {
            toast.success(response.message);
            // alert(JSON.stringify(response))
            console.log("response", response);
            console.log("response.message", response.message);
            setTimeout(() => {
            navigate('/login');
            }, 3000);
            setSigningup(false);
            
            
        } else {
            toast.warning(response.message); 
        }
        setSigningup(false);
    }

    return (
        <div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <span className={styles.loginSignupHeader}>Log In</span>

                <div className={styles.field}>
                    <input type="text" placeholder='Name' value={name} required
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <input type="email" placeholder='Email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <input type="password" placeholder='Password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} required
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className={styles.field} >
                    <button disabled={signingUp}> {signingUp ? 'Signing up...' : 'Signup'}</button>
                </div>
            </form>
            <ToastContainer />
        </div>


    )

}
export default Signup;
