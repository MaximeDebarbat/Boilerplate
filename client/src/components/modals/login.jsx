
// Import necessary libraries
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import TextInput from '@/components/inputs/text';
import GoogleButton from '@/components/authentication/googleButton';
import { signInWithEmail } from '@firebase/authActions';
import { useUI } from '@/context/UIContext';

const LoginModal = () => {

    const { showAlert, hideModal } = useUI();
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const t = useTranslations("general.authentication");

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmail(email, password).then(() => {
            setError(false);
            hideModal();
        }).catch((error) => {
            setError(true);
            showAlert("error", "Error", t(`error.${error.code}`));
        });
    }

    return(
        <div className="w-full flex flex-col justify-center items-center">    
            <form className="w-full flex flex-col justify-center items-center"
                onSubmit={(e) => {handleSubmit(e)}}
                >
                <TextInput error={error} value={email} onChange={(e)=>{setEmail(e.target.value)}} label="Email" placeholder="Type your email"/>
                <TextInput error={error} value={password} onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="Type your password" type="password"/>
                <button className="btn btn-primary m-2">Login</button>
            </form>
            <div className="divider">Or</div>
            <GoogleButton />
            <div className="divider"></div>
        </div>
    )
}

export default LoginModal;