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
import { GetAllReviewProps, GetOwnReviewListProps, GetRecordProps, GetUsageProps, RecordProps, ReviewProps, UsageProps } from '@/utils/appType';
import { getAllReview, getOwnReview, getRecords, getUsages } from '@/api/api';
import OwnReview from '@/components/OwnReview';
import AllReview from '@/components/AllReview';
import router from 'next/router';

const Home = () => {
    const {userInfo, loginState} = useStore(Store);
    useEffect(() => {
        if (!loginState) {
            router.push('/login');
        }
    }, [loginState]);

    const [menuState, setMenuState] = useState('search' as MenuType);
    const [shouldUpdate, setShouldupdate] = useState(false);

    const [records, setRecords] = useState([] as RecordProps[]);
    const [occupies, setOccupies] = useState([] as UsageProps[]);
    const [ownReview, setOwnReview] = useState([] as ReviewProps[]);
    const [allReview, setAllReview] = useState([] as ReviewProps[]);
    const [reviews, setReviews] = useState({} as GetAllReviewProps);

    useEffect(() => {
        if (menuState === 'learn') {
            const getList = async () => {
                const getRecord: GetRecordProps = {
                    userId: userInfo.userId,
                    num: 1,
                    size: 1000
                };
                const temp = await getRecords(getRecord);
                setRecords(temp);
            };
            getList();
        } else if (menuState === 'occupy') {
            const getList = async () => {
                const getUsage: GetUsageProps = {
                    userId: userInfo.userId
                };
                const temp = await getUsages(getUsage);
                setOccupies(temp);
            };
            getList();
        } else if (menuState === 'ownReview') {
            const getList = async () => {
                const getOwn: GetOwnReviewListProps = {
                    userId: userInfo.userId
                };
                const temp = await getOwnReview(getOwn);
                setOwnReview(temp);
            };
            getList();
        } else if (menuState === 'allReview') {
            const getList = async () => {
                const getAll: GetAllReviewProps = {
                    room: reviews.room,
                    building: reviews.building
                };
                const temp = await getAllReview(getAll);
                setShouldupdate(false);
                setAllReview(temp);
            };
            getList();
        }
    }, [menuState, reviews.building, reviews.room, userInfo.userId, shouldUpdate]);

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
                    ) :(<>
                        {menuState === 'ownReview' ? (
                            <OwnReview ownReview={ownReview} />
                        ) : (<>
                            {menuState === 'allReview' ? (
                                <AllReview allReview={allReview} reviews={reviews} setShouldUpdate={setShouldupdate} />
                            ) : (
                                <Search reviews={setReviews} setMenuState={setMenuState} />
                            )
                            }
                        </>)}
                    </>)}
                </>)}
            </div>
        </main>
    )
}

export default Home;