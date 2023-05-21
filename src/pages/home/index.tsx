import { useStore } from 'reto'
import styles from '../home/styles/style.module.css'
import { Store } from '@/store/store';
import UserCard from '@/components/UserCard';
import SideBar from '@/components/SideBar';
import Search from '@/components/Search';
import { useEffect, useState } from 'react';
import { MenuType } from '@/utils/dataType';
import Occupy from '@/components/Occupy';
import Learn from '@/components/Learn';

const Home = () => {
    const {userInfo} = useStore(Store);
    const [menuState, setMenuState] = useState('search' as MenuType);

    useEffect(() => {
        console.log(menuState);
    }, [menuState]);

    return (
        <main className={styles.main}>
            <div className={styles.left} >
                <UserCard userInfo={userInfo}/>
                <SideBar root={userInfo.root} onSelect={setMenuState} />
            </div>
            <div className={styles.content} >
                {menuState === 'occupy' ? (
                    <Occupy />
                ) : (<>
                    {menuState === 'learn' ? (
                        <Learn />
                    ) :(
                        <Search />
                    )}
                </>)}
            </div>
        </main>
    )
}

export default Home;