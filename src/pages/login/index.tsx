import { useEffect, useState } from 'react';
import styles from '../Login/styles/style.module.css'
import router from 'next/router';
import { Store } from '@/store/store';
import { useStore } from 'reto';
import { UserInfoProps, UserLoginProps } from '@/utils/appType';
import { postRootLogin, postUserLogin } from '@/api/api';

const Login = () => {
    const {setUserInfo, setLoginState, loginState, setRootLogin} = useStore(Store);
    const [root, setRoot] = useState(false);
    const [id, setId] = useState('');  
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (loginState) {
            router.push('/home');
        }
    }, [loginState]);

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const changeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const switchRoles = () => {
        setRoot(!root);
    }

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleLogin = async () => {
        const tempInfo: UserLoginProps = {
            userId: id,
            password: password,
            root: root,
        };
        if (id != '' && password != '') {
            await postUserLogin(tempInfo).then(res => {
                if (res.success) {
                    const userInfo: UserInfoProps = {
                        userId: res.user.userid,
                        password: res.user.password,
                        name: res.user.name,
                        root: res.user.root == 1
                    }
                    setUserInfo(userInfo);
                    setLoginState(true);
                } else {
                    alert('No such user!');
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            setShowPopup(true);
        }
    }

    const handleRootLogin = async () => {
        const root = await postRootLogin({
            username: id,
            password: password
        });
        console.log(root);
        if (root.success) {
            setRootLogin(true);
            router.push('/root');
        } else {
            alert('No such user!');
        }
    }

    return (
        <main className={styles.main}>
        <button className={styles.button} onClick={switchRoles}>Switch role</button>
        <div className={styles.contain}>
            <p className={styles.header}>{root ? 'Teacher' : 'Student'} Login</p>
            <div>
                <div className={styles.input}>
                    <div className={styles.inputlable}>{'Account: '}</div>
                    <input
                        className={styles.inputBox}
                        id="id"
                        value={id}
                        onChange={changeId}
                    />
                </div>
                <div className={styles.input}>
                    <div className={styles.inputlable}>{'Password: '}</div>
                    <input
                        className={styles.inputBox}
                        type="password"
                        id="password"
                        value={password}
                        onChange={changePassword}
                    />
                </div>
            </div>
            <button className={styles.loginButton} onClick={handleLogin}>Login</button>
            <button hidden={!root} className={styles.loginButton} onClick={handleRootLogin}>Root Login</button>
            <button className={styles.registerButton} onClick={() => {router.push('/register');}}>Register</button>
        </div>

        {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <span onClick={closePopup}>
                        &times;
                        </span>
                        <h2>Login failed</h2>
                        <p>Please check account and password</p>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Login;