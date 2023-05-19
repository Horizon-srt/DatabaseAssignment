import { useStore } from 'reto'
import styles from '../home/styles/style.module.css'
import { Store } from '@/store/store';

const Home = () => {
    const {userInfo} = useStore(Store);
    console.log(userInfo);
    return (
        <main className={styles.main}>
            <div className={styles.contain}></div>
                <div className={styles.leftsection}>
                    <div className={styles.topsection}>aabbcc</div>
                    <div className={styles.middlesection}></div>
                    <div className={styles.bottomsection}></div>
                    <div className={styles.lastsection}></div>
                </div>
                <div className={styles.rightsection}>
                <div className={styles.sidebar}>
                    <div className={styles.logo}>Logo</div>
                        <ul className={styles.menu}>
                            <li className={styles.menuitem}>菜单项1</li>
                            <li className={styles.menuitem}>菜单项2</li>
                            <li className={styles.menuitem}>菜单项3</li>
                            <li className={styles.menuitem}>菜单项4</li>
                        </ul>
                    </div>
                    </div>
        </main>
    )
}

export default Home;