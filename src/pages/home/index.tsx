import { useStore } from 'reto'
import styles from '../home/styles/style.module.css'
import { Store } from '@/store/store';
import UserCard from '@/components/UserCard';
import SideBar from '@/components/SideBar';
import Search from '@/components/Search';

const Home = () => {
    const {userInfo} = useStore(Store);

    return (
        <main className={styles.main}>
            <div className={styles.left} >
                <UserCard userInfo={userInfo}/>
                <SideBar root={userInfo.root} />
            </div>
            <div className={styles.content} >
                <Search />
            </div>
        </main>
    )
}

export default Home;