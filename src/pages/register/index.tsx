import { useState } from 'react';
import styles from '../register/styles/style.module.css'
import router from 'next/router';
import { UserRegisterProps } from '@/utils/appType';
import { postUserRegister } from '@/api/api';

const Register = () => {
    const [root, setRoot] = useState(false);
    const [id, setId] = useState('');  
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleRegister = async () => {
        const tempInfo: UserRegisterProps = {
            userId: id,
            name: name,
            password: password,
            root: root
        };
        if (id != '' && name != '' && password != '') {
            await postUserRegister(tempInfo).then(res => {
                console.log(res);
                alert('Register successfully');
            }).catch(err => {
                console.log(err);
            })
            router.push('/login');
        } else {
            setShowPopup(true);
        }
    }

    const goBack = () => {
        router.back();
    };

    const SwitchRoles = () => {
        setRoot(!root)
    }
    
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);   
      };

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
    
    const changeId = (event: React.ChangeEvent<HTMLInputElement>) => {
      setId(event.target.value);   
    };
  
    return (
        <main className={styles.main}>
            <button className={styles.button} onClick={SwitchRoles}>Switch role</button>
            <div className={styles.contain}>
            <p className={styles.header}>{root ? 'Teacher' : 'Student'}Register</p>
            <div>
            <div className={styles.input}>
                    <label htmlFor="name">Name: </label>
                    <input
                        className={styles.inputBox}
                        id="name"
                        value={name.toString()}
                        onChange={changeName}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="id">Account: </label>
                    <input
                        className={styles.inputBox}
                        id="id"
                        value={id.toString()}
                        onChange={changeId}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Password: </label>
                    <input
                        className={styles.inputBox}
                        type="password"
                        id="password"
                        value={password}
                        onChange={changePassword}
                    />
                </div>
            </div>
            <button className={styles.registerButton} onClick={handleRegister}>Register</button>
            <button className={styles.goBack} onClick={goBack}>Return to login</button>

            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <button 
                        className={styles.closeButton}
                        onClick={closePopup}>
                        &times;
                        </button>
                        <h2>Register failed</h2>
                        <p>Please try again</p>
                    </div>
                </div>
            )}
        </div>
        </main>
    )
}

export default Register;