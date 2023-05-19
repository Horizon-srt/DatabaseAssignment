import { useStore } from 'reto'
import styles from '../home/styles/style.module.css'
import { Store } from '@/store/store';
import UserCard from '@/componments/UserCard';

const Home = () => {
    const {userInfo} = useStore(Store);

    return (
        <main className={styles.main}>
            <UserCard userInfo={userInfo}/>
        </main>
    )
}

export default Home;