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
                alert('注册成功');
            }).catch(err => {
                console.log(err);
            })
            router.back();
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
            <button className={styles.button} onClick={SwitchRoles}>切换身份</button>
            <div className={styles.contain}>
            <p className={styles.header}>{root ? '教师' : '学生'}注册</p>
            <div>
            <div className={styles.input}>
                    <label htmlFor="name">昵称：</label>
                    <input
                        className={styles.inputBox}
                        id="name"
                        value={name.toString()}
                        onChange={changeName}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="id">账号：</label>
                    <input
                        className={styles.inputBox}
                        id="id"
                        value={id.toString()}
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
            <button className={styles.registerButton} onClick={handleRegister}>注册</button>
            <button className={styles.goBack} onClick={goBack}>返回登陆</button>

            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <button 
                        className={styles.closeButton}
                        onClick={closePopup}>
                        &times;
                        </button>
                        <h2>注册错误</h2>
                        <p>请完整填写信息</p>
                    </div>
                </div>
            )}
        </div>
        </main>
    )
}

export default Register;