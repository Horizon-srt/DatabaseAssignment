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
import { GetRecordProps, GetUsageProps, RecordProps, UsageProps } from '@/utils/appType';
import { getRecords, getUsages } from '@/api/api';

const Home = () => {
    const {userInfo} = useStore(Store);
    const [menuState, setMenuState] = useState('search' as MenuType);

    const [records, setRecords] = useState([] as RecordProps[]);
    const [occupies, setOccupies] = useState([] as UsageProps[]);

    useEffect(() => {
        if (menuState == 'learn') {
            const getList = async () => {
                const temp: GetRecordProps = {
                    userId: userInfo.userId,
                    num: 0,
                    size: 0
                };
                await getRecords(temp).then(res => {
                    setRecords(res);
                }).catch(err => {
                    console.log(err);
                });
            };
            getList();
        } else if (menuState == 'occupy') {
            const getList = async () => {
                const temp: GetUsageProps = {
                    userId: userInfo.userId
                };
                await getUsages(temp).then(res => {
                    setOccupies(res);
                }).catch(err => {
                    console.log(err);
                });
            };
            getList();
        }
    }, [menuState, userInfo.userId]);

    return (
        <main className={styles.main}>
            <div className={styles.left} >
                <UserCard userInfo={userInfo}/>
                <SideBar root={userInfo.root} onSelect={setMenuState} />
            </div>
            <div className={styles.content} >
                {menuState === 'occupy' ? (
                    <Occupy occupies={occupies} />
                ) : (<>
                    {menuState === 'learn' ? (
                        <Learn records={records} />
                    ) :(
                        <Search />
                    )}
                </>)}
            </div>
        </main>
    )
}

export default Home;