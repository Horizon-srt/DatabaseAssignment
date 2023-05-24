import { useEffect, useState } from 'react';
import styles from '../Login/styles/style.module.css'
import router from 'next/router';
import { Store } from '@/store/store';
import { useStore } from 'reto';
import { UserInfoProps, UserLoginProps } from '@/utils/appType';
import { postUserLogin } from '@/api/api';

const Login = () => {
    const {setUserInfo, setLoginState, loginState} = useStore(Store);
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
            /* mock */
            // setUserInfo({
            //     userId: '1',
            //     password: '1',
            //     name: 'a',
            //     root: false
            // });
            // setLoginState(true)
        } else {
            setShowPopup(true);
        }
    }

    return (
        <main className={styles.main}>
            <button className={styles.button} onClick={switchRoles}>切换身份</button>
        <div className={styles.contain}>
            <p className={styles.header}>{root ? '教师' : '学生'}登陆</p>
            <div>
                <div className={styles.input}>
                    <label htmlFor="id">账号：</label>
                    <input
                        className={styles.inputBox}
                        id="id"
                        value={id}
                        onChange={changeId}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">密码：</label>
                    <input
                        className={styles.inputBox}
                        type="password"
                        id="password"
                        value={password}
                        onChange={changePassword}
                    />
                </div>
            </div>
            <button className={styles.loginButton} onClick={handleLogin}>登陆</button>
            <button className={styles.registerButton} onClick={() => {router.push('/register');}}>注册账号</button>
        </div>

        {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <span onClick={closePopup}>
                        &times;
                        </span>
                        <h2>登陆失败</h2>
                        <p>请填写正确的登陆信息</p>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Login;