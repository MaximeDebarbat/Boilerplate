
// Import necessary libraries
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import TextInput from '@/components/inputs/text';
import GoogleButton from '@/components/authentication/googleButton';
import { registerWithEmail } from '@firebase/authActions';
import { useUI } from '@/context/UIContext';

const RegisterModal = () => {

    const { showAlert, hideModal } = useUI();
    const [error, setError] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const t = useTranslations("general.authentication");

    const handleSubmit = (e) => {
        e.preventDefault();
        registerWithEmail(email, password).then((user) => {
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
                <TextInput error={error} 
                           value={name} 
                           onChange={(e)=>{setName(e.target.value)}} 
                           label={t('register.name')}
                           placeholder={t('register.name-placeholder')}
                           />
                <TextInput error={error} 
                           value={email} 
                           onChange={(e)=>{setEmail(e.target.value)}} 
                           label={t('register.email')}
                           placeholder={t('register.email-placeholder')}
                           />
                <TextInput error={error} 
                           value={password} 
                           onChange={(e)=>{setPassword(e.target.value)}} 
                           label={t('register.password')}
                           placeholder={t('register.password-placeholder')}
                           type="password"/>
                <button className="btn btn-primary m-2">Register</button>
            </form>
            <div className="divider">Or</div>
            <GoogleButton text="Register with Google"/>
            <div className="divider"></div>
        </div>
    )
}

export default RegisterModal;